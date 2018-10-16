class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status:422
    end
  end

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    if @user
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status:422
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user == current_user
      if @user.update(user_params)
        render "api/users/show"
      else
        render json: @user.errors.full_messages, status: 401
      end
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def user_params
    params.require(:user).permit(:id, :email,:password,:band_name,:description,:photo)
  end
end
