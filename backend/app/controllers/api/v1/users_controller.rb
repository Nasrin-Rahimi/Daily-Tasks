class Api::V1::UsersController < ApplicationController

    before_action :set_user, only: [:show, :update, :destroy]
    
    def index 
        users = User.all
        render json: users, except: [:created_at, :updated_at], status: 200
    end

    def show
        if(@user)
            render json: {userId: @user.id, name: @user.name, tasks: @user.tasks}, status: 200
        else
            binding.pry
            render json: {message: 'User Not Found'}
        end
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
