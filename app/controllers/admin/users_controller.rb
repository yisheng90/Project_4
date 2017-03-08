class Admin::UsersController < Admin::BaseController
  def new
    @user = User.new
    @grades = Grade.all
    @user_type = ['admin', 'teacher', 'student']
  end

  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    @user.password = '1234567'

    if @user.save
      UserMailer.registration_confirmation(@user).deliver_now
      flash[:success] = 'You have created an user.'
      redirect_to root_path
    else
      flash[:danger] = 'Something went wrong.'
      @grades = Grade.all
      render :new
    end
  end


  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :user_type, :personal_id, :grade_id)
  end
end
