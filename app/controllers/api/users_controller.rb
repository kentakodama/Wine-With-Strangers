class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show #indirectly renders on page 
    else
      render json: @user.errors.full_messages, status: 422 #directly renders on page
    end

  end

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

end
