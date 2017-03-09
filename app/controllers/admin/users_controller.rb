class Admin::UsersController < Admin::BaseController
  before_action :set_user, only: [:update, :destroy]
  def new
    @user = User.new
    @grades = Grade.all
    @user_type = ['admin', 'teacher', 'student']
    @users = User.all

    render component: 'AdminDashboardSidebar', props:{users: [], current_page: 'new', grades: @grades, user_type: @user_type}
  end

  def index
    @users = User.all
    render component: 'AdminDashboardSidebar', props:{users:@users, current_page: 'user'}

  end

  def create
    @user = User.new(user_params)
    @user.password = '1234567'

    if @user.save
      UserMailer.registration_confirmation(@user).deliver_now
      flash[:success] = 'You have created an user.'
      render json: @user
    else
      flash[:danger] = 'Something went wrong.'
      @grades = Grade.all
      @user_type = ['admin', 'teacher', 'student']
      @users = User.all
      render component: 'AdminDashboardSidebar', props:{users: @users, current_tab: 'new', grades: @grades, user_type: @user_type}
    end
  end


  def update
      @user.update(user_params)

      if @user.save!
        flash[:success] = 'Successfully update user'
        render json: @user
      else
        flash[:danger] = 'Something wnet wrong'
        render 'edit'
      end

  end

  def destroy
    @user.delete
    render json: @user
  end


  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :email, :password, :user_type, :personal_id, :grade_id, :status)
  end
end
