class Teacher::BaseController < ApplicationController
  before_action :authorize_teacher!

  private

  def authorize_teacher!
    unless current_user && current_user.user_type == 'teacher'
      flash[:danger] = 'No Entry Permission'
      redirect_to root_path
    end
  end
end
