class TeachersController < ApplicationController
  before_action :is_authenticated
  def index
    @teachers = User.where('(user_type=?)' , 'teacher')
  end

  def show
    @teacher = User.find_by_id(params[:id])
  end
end
