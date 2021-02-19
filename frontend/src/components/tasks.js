class Tasks{
    constructor(){
        this.tasks = [];
        this.adapter = new TasksAdapter();
        this.initBindingsAndEventListener();
        this.fetchAndLoadTasks();
    }

    initBindingsAndEventListener(){
        this.tasksContainer = document.getElementById('tasks_container');
    }

    fetchAndLoadTasks(){
        this.adapter
        .getTasks()
        .then(tasks => { 
            tasks.forEach(task => this.tasks.push(new Task(task)));
        })
        .then( () => {
            this.render();
        })
    }

    render(){
        this.tasksContainer.innerHTML = this.tasks.map(task => `<li>${task.title}</li>`).join('');
    }
}