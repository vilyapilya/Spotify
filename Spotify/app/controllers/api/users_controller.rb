class Api::UsersController < ApplicationController
  def new
    render :new
  end

  def show
    @user = User.first
    render :show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      signin(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
