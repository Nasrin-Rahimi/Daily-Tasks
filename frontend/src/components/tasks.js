class Tasks{
    constructor(tasksJSON){
        this.adapter = new TasksAdapter();
        this.tasks = [];
        this.initBindingsAndEventListener();
        this.loadTasks(tasksJSON);
        this.renderTasks();
    }

    initBindingsAndEventListener(){
        this.tasksContainer = document.getElementById('tasks_container');
        this.messageDiv = document.getElementById('message-div');
        this.newToyBtn = document.getElementById('new-toy-btn');
        this.tasksContainer.addEventListener('change', this.doneTask.bind(this));
    }

    doneTask(e){
        const task = this.tasks.find(task => task.id == e.target.id);
        task.done = true;
        this.adapter.updateTask(task);
        e.target.parentNode.classList.add('checked');
    }

    loadTasks(tasksJSON){
         tasksJSON.forEach(task => this.tasks.push(new Task(task)));
        //  console.log(this.tasks);
    }

    renderTasks(){
        this.newToyBtn.style.display = 'block';
        if (this.tasks.length > 0){
            this.tasksContainer.style.display = "block";
            this.messageDiv.style.display = "none";
            this.tasksContainer.innerHTML = this.tasks.map(task => task.renderTask()).join('');
        }
        else{
            this.tasksContainer.style.display = "none";
            this.messageDiv.style.display = "block";
            this.messageDiv.innerHTML = `<h2>You don't have any task. Let add your Daily Tasks!</h2>`;
        }
    }
}