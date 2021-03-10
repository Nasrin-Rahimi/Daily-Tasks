class Api::V1::TasksController < ApplicationController

    before_action :set_task, only: [:update, :destroy]

    def index
        user = User.find(params[:user_id])
        tasks = user.tasks
        render json: tasks
    end

    def create
        task = Task.new(task_params)
        if task.save
            render json: task
        else
            render json: { status: 'error', message: "Task already exist." }
        end
    end

    def update
        if @task.update(task_params)
            render json: @task
        else
            render json: { status: 'error', message: "Server Error! Please try again." }
        end
    end

    def destroy
        if @task.delete
            render json: {taskId: @task.id}
        else
            render json: { status: 'error', message: "Delete Task Error! Please try again." }
        end
    end

    private 

    def task_params
        params.require(:task).permit(:title, :image_url, :user_id, :done)
    end

    def set_task
        @task = Task.find(params[:id])
    end

end
