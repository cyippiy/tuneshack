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
    @user = User.all
  end

  def show
    @user = User.find(params[:id])
    if @user
      render "api/users/show"
    end
  end

  # def update
  #   if @user == current_user
  #     if @user.update(user_params)
  #
  #     else
  #       flash.now[:errors] = @user.errors.full_messages
  #   else
  #     render :show
  #   end
  # end

  def user_params
    params.require(:user).permit(:email,:password)
  end
end
