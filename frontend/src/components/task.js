class Task{
    constructor(taskJSON){
        this.id = taskJSON.id;
        this.title = taskJSON.title;
        this.imageUrl = taskJSON.image_url;
        this.done = taskJSON.done
        this.userId = taskJSON.user_id;
    }

    renderTask(){
        if (this.done == true){
            return `<li class="task checked"><input type="checkbox" id="${this.id}" checked />
            <label for="${this.id}">${this.title}</label>
            <img class="taskImage" src="${this.imageUrl}" alt="Task Image"/>
            <button id="${this.id}" class="delete" >Delete Task</button>
            </li>`
        } else {
            return `<li class="task"><input type="checkbox" id="${this.id}" />
            <label for="${this.id}">${this.title}</label>
            <img class="taskImage" src="${this.imageUrl}" alt="Task Image"/>
            <button id="${this.id}" class="delete" >Delete Task</button>
            </li>`
        }
    }

}
