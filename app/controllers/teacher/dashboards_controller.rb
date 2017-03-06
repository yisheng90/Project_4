class Teacher::DashboardsController < Teacher::BaseController
  def show
    @teacher = User.find(current_user.id)
  end
end
