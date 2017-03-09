class Teacher::CoursesController < Teacher::BaseController
  before_action :set_course, only: [:edit, :update, :destroy]
  before_action :set_nested_params
  def index
    @courses = Course.where(teacher_id: current_user.id).includes(:grade, :teacher).map { |post| post.as_json.merge({grade: post.grade.as_json, teacher: post.grade.as_json}) }
  end


  def new
    @course = Course.new

  end


  def create
    @course = Course.new(course_params)
    @course.teacher = current_user


    if @course.save!
      flash[:success] = 'Successfully set up course'
      redirect_to new_teacher_course_video_path(@course)
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
      respond_to do |format|
      format.html {
        redirect_to teacher_courses_path
      }
      format.json {
        render json: @course.as_json.merge({grade: @course.grade.as_json, teacher: @course.teacher.as_json})
      }
    end

    else
      flash[:danger] = 'Something wnet wrong'
      render 'edit'
    end
  end

  def update_status
    @course = Course.find(params[:course_id])
    @course.update(course_params)

    if @course.save!
      flash[:success] = 'Updated course status'
      render json: @course.as_json.merge({grade: @course.grade.as_json, teacher: @course.teacher.as_json})
    end

  end

  def destroy
    if @course.delete
      flash[:success] = 'This course has been deleted'
      render json: @course
    else
      flash[:danger] = 'Something went wrong'
      redirect_to my_dashboard_path
    end
  end

  private

  def set_course
    @course = Course.find(params[:id])
  end

  def set_nested_params
    @grades = Grade.all
    @categories = Category.all
  end

  def course_params
    params.require(:course).permit(:title, :description, :grade_id, :category_id, :status)
  end
end
