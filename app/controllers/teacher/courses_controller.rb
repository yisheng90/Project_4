class Teacher::CoursesController < Teacher::BaseController
  def index
    @courses = Course.where(teacher_id: current_user.id)
  end

  def show
  end

  def new
    @course = Course.new
    @grades = Grade.all
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

  def course_params
    params.require(:course).permit(:title, :description, :grade)
  end
end
