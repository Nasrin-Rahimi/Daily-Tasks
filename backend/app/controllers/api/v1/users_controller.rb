class Api::V1::UsersController < ApplicationController

    before_action :set_user, only: [:show, :update, :destroy]
    
    def index 
        @users = User.all
        render json: @users, status: 200
    end

    def show
        render json: @user, status: 200
    end

    def create
        @user = User.create(user_params)
        render json: @user, status: 200
    end

    def update
        @user.update
        render json: @user, status: 200
    end

    def destroy
        @user.destroy
        render json: {userId: @user.id}, status: 200
    end

    private

    def user_params
        params.require(:user).permit(:name)
    end

    def set_user
        @user = User.find(params[:id])
    end
end
