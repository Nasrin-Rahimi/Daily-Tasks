class Tasks{
    constructor(tasksJSON){
        // this.adapter = new TasksAdapter();
        this.tasks = [];
        this.initBindingsAndEventListener();
        this.loadTasks(tasksJSON);
        this.renderTasks();
    }

    initBindingsAndEventListener(){
        this.tasksContainer = document.getElementById('tasks_container');
    }

    // fetchAndLoadTasks(){
    //     this.adapter
    //     .getTasks()
    //     .then(tasks => { 
    //         tasks.forEach(task => this.tasks.push(new Task(task)));
    //     })
    //     .then( () => {
    //         this.render();
    //     })
    // }

    loadTasks(tasksJSON){
         tasksJSON.forEach(task => this.tasks.push(new Task(task)));
    }

    renderTasks(){
        if (this.tasks.length > 0){
            this.tasksContainer.innerHTML = this.tasks.map(task => task.renderLi()).join('');
        }
        else{
            this.tasksContainer.innerHTML = `<h2>You don't have any task. Let add your Daily Tasks!</h2>`;
        }
    }
}