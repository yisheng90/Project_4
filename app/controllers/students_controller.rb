class StudentsController < ApplicationController
  before_action :is_authenticated
  before_action :is_admin, only: [:new, :index, :create]

  def index
    @students = User.where('(user_type=?)' , 'student')
  end

  def new
    @student = User.new
  end

  def show
    @student = User.find_by_id(parmas[:id])
  end

  def create
    @student = User.new(student_params)
    @student.user_type = 'student'
    @student.grade = Grade.first
    @student.password = '1234567' if @student.password == nil

    if @student.save!
      flash[:success] = 'Created Teacher'
      redirect_to root_path
    else
      flash[:danger] = 'Something Went Wrong'
      render 'new'
    end
  end

  private

  def student_params
    params.require(:user).permit(:name, :email, :password, :user_type, :personal_id)
  end


end
