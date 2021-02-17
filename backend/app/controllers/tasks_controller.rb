class TasksController < ApplicationController

    before_action :set_task, only: [:show, :update, :destroy]

    def index
        tasks = Task.all
        render json: tasks, status: 200
    end

    def show
        render json: task, status: 200
    end

    def create
        task = Task.create(task_params)
        render json: task, status: 200
    end

    def update
        task.update
        render json: task, status: 200
    end

    def destroy
        task.delete
        render json: {taskId: task.id}, status: 200
    end

    private 

    def task_params
        params.require(:task).permit(:title, :image_url, :user_id, :done)
    end

    def set_task
        task = Task.find(params[:id])
    end

end
