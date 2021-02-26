class Tasks{
    constructor(tasksJSON, userId){
        this.adapter = new TasksAdapter();
        this.tasks = [];
        this.userId = userId;
        this.initBindingsAndEventListener();
        if (tasksJSON) {
            this.fillTasks(tasksJSON);
        }
        this.renderTasks();
    }

    initBindingsAndEventListener(){
        this.tasksContainer = document.getElementById('tasks_container');
        this.messageDiv = document.getElementById('message-div');
        this.newTaskBtn = document.getElementById('new-task-btn');
        this.newTaskBtn.style.display = 'block';
        this.newTaskContainer = document.getElementById('new-task-container');
        this.newTaskForm = document.getElementById('new-task-form');
        this.newTaskMessage = document.getElementById('new-task-message');
        this.newTaskTitle = document.getElementById('title');
        this.newTaskImageUrl = document.getElementById('image_url');
        this.tasksContainer.addEventListener('change', this.updateTask.bind(this));
        this.newTaskBtn.addEventListener('click', this.newTask.bind(this));
        this.newTaskForm.addEventListener('submit', this.createTask.bind(this));
        this.tasksContainer.addEventListener('click', this.deleteTask.bind(this));
    }

    toggle(element, state){
        element.style.display = state;
    }

    clearNewTaskElements(){
        this.newTaskTitle.value = "";
        this.newTaskImageUrl.value = "";
        this.newTaskMessage.innerHTML = "";
    }

    fillTasks(tasksJSON){
        tasksJSON.sort((a, b) => a.id - b.id).forEach(task => this.tasks.push(new Task(task)));
        //tasksJSON.forEach(task => this.tasks.push(new Task(task)));
    }

    renderTasks(){
        if (this.tasks.length > 0){
            this.toggle(this.tasksContainer,"block");
            this.toggle(this.messageDiv,"none");
            this.tasksContainer.innerHTML = this.tasks.map(task => task.renderTask()).join('');
        }
        else{
            this.toggle(this.tasksContainer,"none");
            this.toggle(this.messageDiv,"block");
            this.messageDiv.innerHTML = `<h3>You don't have any task. Lets add your Daily Tasks!</h3>`;
        }
    }

    newTask(){
        this.newTaskContainer.style.display == 'block' ? 
            this.toggle(this.newTaskContainer,'none') : 
            this.toggle(this.newTaskContainer,'block');
        this.clearNewTaskElements();
    }

    createTask(e){
        e.preventDefault();
        this.adapter.createTask(this.newTaskTitle.value, this.newTaskImageUrl.value, this.userId)
        .then(task => {
            if (task.status == "error") {
                this.newTaskMessage.innerHTML = task.message;
            }
            else {
                this.tasks.push(new Task(task));
                this.renderTasks();
                this.toggle(this.newTaskContainer,'none');
                this.clearNewTaskElements();
            }
        });
        // .catch(function(error) {
        //     console.log(error.message);
        //   });
    }

    updateTask(e){
        const task = this.tasks.find(task => task.id == e.target.id);
        task.done = e.target.checked;
        this.adapter.updateTask(task)
        .then(newTask => {
            if(newTask.status == 'error'){
                this.messageDiv.innerHTML = newTask.message;
                this.toggle(this.messageDiv,'block');
            } else {
                this.renderTasks();
                //this.toggle(this.messageDiv,'none');
            }
        });
    }

    deleteTask(e){

        const taskId = e.target.id
        if(e.target && e.target.nodeName == "BUTTON") {
            this.adapter.deleteTask(taskId).then(res =>{
               if (res.status == 'error'){
                    this.messageDiv.innerHTML = res.message;
                    this.toggle(this.messageDiv,'block');
               } else {
                   const userIdIndex = this.tasks.findIndex(element => element.id == taskId)
                    this.tasks.splice(userIdIndex, 1);
                    this.renderTasks();
               }
            })
           
        }
    }
    
}