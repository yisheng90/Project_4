class CoursesController < ApplicationController
  before_action :is_authenticated, except: [:index]
  before_action :set_course, only: [:show]

  def index
    @courses = Course.where(status: true)
  end

  def show
    if @course.status === false
      redirect_to root_path
    end
  end

  private

  def set_course
    @course = Course.find(params[:id])
  end

  def course_params
    params.require(:course).permit(:title, :grade_id)
  end
end
