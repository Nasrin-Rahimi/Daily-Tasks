class Tasks{
    constructor(tasksJSON, userId){
        this.adapter = new TasksAdapter();
        this.tasks = [];
        this.userId = userId;
        this.initBindingsAndEventListener();
        this.loadTasks(tasksJSON);
        this.renderTasks();
        // console.log(this)
    }

    initBindingsAndEventListener(){
        this.tasksContainer = document.getElementById('tasks_container');
        this.messageDiv = document.getElementById('message-div');
        this.newTaskBtn = document.getElementById('new-task-btn');
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

    messageDivToggle(state){
        this.messageDiv.style.display = state;
    }

    loadTasks(tasksJSON){
        if (tasksJSON) {
            tasksJSON.forEach(task => this.tasks.push(new Task(task)));
        }
    }

    updateTask(e){
        const task = this.tasks.find(task => task.id == e.target.id);
        task.done = e.target.checked;
        this.adapter.updateTask(task);
        //Should update tasks list too
        task.done == true ? e.target.parentNode.classList.add('checked') : e.target.parentNode.classList.remove('checked');
    }
    newTaskToggle(state){
        this.newTaskContainer.style.display = state;
        this.newTaskTitle.value = "";
        this.newTaskImageUrl.value = "";
        this.newTaskMessage.innerHTML = "";
    }
    
    newTask(){
        this.newTaskContainer.style.display == 'block' ? 
            this.newTaskToggle('none') : 
            this.newTaskToggle('block');
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
                this.newTaskToggle('none');
            }
        });
        // .catch(function(error) {
        //     console.log(error.message);
        //   });
    }

    deleteTask(e){
        const taskId = e.target.id
        if(e.target && e.target.nodeName == "BUTTON") {
            this.adapter.deleteTask(taskId).then(res =>{
               if (res.status){
                   const userIdIndex = this.tasks.findIndex(element => element.id == taskId)
                    this.tasks.splice(userIdIndex, 1);
                    this.renderTasks();
               }
            })
           
        }
    }

    renderTasks(){
        this.newTaskBtn.style.display = 'block';
        if (this.tasks.length > 0){
            this.tasksContainer.style.display = "block";
            this.messageDivToggle("none");
            this.tasksContainer.innerHTML = this.tasks.map(task => task.renderTask()).join('');
        }
        else{
            this.tasksContainer.style.display = "none";
            this.messageDivToggle("block");
            this.messageDiv.innerHTML = `<h2>You don't have any task. Let add your Daily Tasks!</h2>`;
        }
    }

    
}