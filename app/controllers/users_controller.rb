class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update]
  before_action :is_authenticated, only: [:new, :create]
  before_action :is_admin, only: [:new, :create, :list_teacher]

  def index
    @users = User.all
    render component: 'Users', props: { users: @users }, tag: 'span', class: 'user'
  end

  def new
    @user = User.new
  end

  def edit
  end

  private

  def set_user
    @user = User.find_by_id(params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :email, :password, :type, :personal_id, :grade, :school)
  end
end
