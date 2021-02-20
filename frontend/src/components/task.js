class Task{
    constructor(taskJSON){
        this.id = taskJSON.id;
        this.title = taskJSON.title;
        this.imageUrl = taskJSON.image_url;
        this.done = taskJSON.done
        this.userId = taskJSON.user_id;
    }

    renderLi(){
        return `<li class="task">${this.title}<img class="taskImage" src="${this.imageUrl}"/></li>`
    }
}
