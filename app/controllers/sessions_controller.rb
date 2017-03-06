class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.authenticate(user_params)
    if user

      if user.registration_confirmed
        session[:user_id] = user.id
        cookies.signed[:user_id] = user.id
        flash.now[:success] = "Wlecome #{user.name}. You have logged in."
        if current_user.user_type == 'teacher'
          redirect_to my_dashboard_path
        else
        redirect_to root_path
        end
      else
        flash.now[:danger] = 'Please activate your account by following the
        instructions in the account confirmation email you received to proceed'
        render 'new'
      end
    else
      flash.now[:error] = 'Invalid email/password combination' # Not quite right!
       render 'new'
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:success] = "You have logged out."
    redirect_to root_path
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
