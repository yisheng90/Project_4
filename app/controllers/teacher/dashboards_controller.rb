class Teacher::DashboardsController < Teacher::BaseController
  def show
    @user = User.find(current_user.id)
  end

  def update
    @user = current_user
    @user.update(user_params)
    redirect_to teacher_dashboard_path
  end

  private

  def user_params
    params.require(:user).permit(:name, :password, :dob)
  end
end
