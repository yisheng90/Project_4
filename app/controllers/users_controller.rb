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

  def show
    render component: 'User', props: {user: @user}, tag:'span', class: 'user'
  end

  def create
    @user = User.new(user_params)

    if @user.save!
      flash.now[:success] = 'Please check you mail box and confirm email'
      redirect_to login_path
    else
      flash.now[:error] = "Ooooppss, something went wrong!"
      render :new
    end
  end

  def update
    @user.update(user_params)

    if @user
      render component: 'User', props: {user: @user}, tag:'span', class: 'user'
    else
      render 'edit'
    end
  end



  private

  def set_user
    @user = User.find_by_id(params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :email, :password, :type, :personal_id, :grade, :school)
  end
end
