class TeachersController < ApplicationController
  before_action :is_authenticated
  before_action :is_teacher, only: [:dashboard]
  before_action :is_admin, only: [:new, :index, :create]

  def index
    @teachers = User.where('(user_type=?)' , 'teacher')
  end

  def new
    @teacher = User.new
  end

  def show
    @teacher = User.find_by_id(params[:id])
  end

  def create
    @teacher = User.new(teacher_params)
    @teacher.user_type = 'teacher'
    @teacher.grade = Grade.first
    @teacher.password = '1234567' if @teacher.password == nil

    if @teacher.save!
      ApplicationMailer.sample_email(@teacher).deliver
      flash[:success] = 'Created Teacher'
      redirect_to root_path
    else
      flash[:danger] = 'Something Went Wrong'
      render 'new'
    end
  end


  def dashboard
    render component: 'TeacherDashboard', props: {teacher: @current_user, courses: @current_user.courses ,new_course_path: new_course_path(@course)}, tag:'span', class: 'user'
  end

  private

  def teacher_params
    params.require(:user).permit(:name, :email, :password, :user_type, :personal_id)
  end


end
