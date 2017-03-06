class Teacher::BaseController < ApplicationController
  before_action :authorize_teacher!

  private

  def authorize_teacher!
    return current_user.user_type === 'teacher' ?  true : false
  end
end
