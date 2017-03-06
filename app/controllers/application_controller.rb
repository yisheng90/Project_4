class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def is_authenticated
    unless current_user
      flash[:danger] = 'Credentials Invalid!!'
      redirect_to login_path
    end
  end

  def is_admin
    unless current_user && current_user.user_type == 'admin'
      flash[:danger] = 'No Entry Permission'
      redirect_to root_path
    end
  end

  def is_teacher
    unless current_user.user_type == 'teacher'
      flash[:danger] = 'No Entry Permission'
      redirect_to root_path
    end
  end

  def current_user
    @current_user ||= User.find_by_id(session[:user_id])
  end

  helper_method :current_user
end
