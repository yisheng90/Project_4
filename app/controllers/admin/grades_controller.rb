class Admin::GradesController < ApplicationController
  def new
  end

  def index
    @grades = Grade.all
  end

  def create
    @grade = Grade.new(grade_params)

    if @grade.save
      render json: @grade.as_json.merge(courses: @grade.courses.as_json )
    else
      redirect_to admin_grades_path
    end
  end

  def destroy
    @grade = Grade.find(params[:id])
    @grade.delete
    render json: @grade
  end

  private

  def grade_params
    params.require(:grade).permit(:grade)
  end
end
