class RegistrationConfirmationController < ApplicationController

  def show
    @user = User.find_by_registration_token(params[:id])

    unless @user
      redirect_to root_path
    end
  end

  def update
    @user = User.find(params[:id])
    @user.password = user_params[:password]

    if @user.save
      redirect_to login_path
    else
      render :show
    end
  end

  private

  def user_params
    params.require(:user).permit(:password)
  end


end
