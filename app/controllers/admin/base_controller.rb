class Admin::BaseController < ApplicationController
  before_action :authorize_admin!

  private

  def authorize_admin!
    unless current_user && current_user.user_type == 'admin'
      flash[:danger] = 'No Entry Permission'
      redirect_to root_path
    end
  end
end
