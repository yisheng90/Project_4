class Teacher::CoursesController < Teacher::BaseController
  before_action :set_course, only: [:edit, :update, :destroy]
  def index
    @courses = Course.where(teacher_id: current_user.id)
  end


  def new
    @course = Course.new
    @grades = Grade.all
  end


  def create
    @course = Course.new(course_params)
    @course.teacher = current_user
    @grades = Grade.all

    if @course.save!
      flash[:success] = 'Successfully set up course'
      redirect_to new_teacher_course_video_path(@course)
    else
      flash[:danger] = 'Something wnet wrong'
      render 'new'
    end

  end

  def edit
    @grades = Grade.all
  end

  def update
    @course.update(course_params)
    @grades = Grade.all

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
    @course = Course.find(params[:id])
  end

  def course_params
    params.require(:course).permit(:title, :description, :grade_id)
  end
end
