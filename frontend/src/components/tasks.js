class Tasks{
    constructor(){
        this.tasks = [];
        this.adapter = new TasksAdapter();
        this.initBindingsAndEventListener();
        this.fetchAndLoadTasks();
    }

    initBindingsAndEventListener(){

    }

    fetchAndLoadTasks(){
        this.adapter.getTasks().then(tasks => console.log(tasks))
    }
}