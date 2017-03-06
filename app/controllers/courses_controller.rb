class CoursesController < ApplicationController
  before_action :is_authenticated, except: [:index]
  before_action :is_teacher, only: [:new, :create, :edit, :update, :destroy]
  before_action :set_course, only: [:show]

  def index
    @courses = Course.all
  end

  def show

  end

  def new
    @course = Course.new
  end

  def create
    @course = Course.new(course_params)
    @course.teacher = current_user

    if @course.save!
      flash[:success] = 'Successfully set up course'
      redirect_to my_dashboard_path
    else
      flash[:danger] = 'Something wnet wrong'
      render 'new'
    end

  end

  def edit
  end

  def update
    @course.update(course_params)

    if @course.save!
      flash[:success] = 'Successfully set up course'
      redirect_to my_dashboard_path
    else
      flash[:danger] = 'Something wnet wrong'
      render 'edit'
    end
  end

  def destroy
    if @course.delete
      flash[:success] = 'This course has been deleted'
      redirect_to my_dashboard_path
    else
      flash[:danger] = 'Something went wrong'
      redirect_to my_dashboard_path
    end
  end

  private

  def set_course
    @course = Course.where('(id=?)', params[:id])
  end

  def course_params
    params.require(:course).permit(:title, :grade_id)
  end
end
