class Api::SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      signin(@user)
      render :show
    else
      render json: ["Invalid username/password combination"]
    end
  end

  def destroy
    @user = current_user
    if @user
      signout
      render {}
    else
      render json: ["Nobody signed in"]
    end
  end
end
