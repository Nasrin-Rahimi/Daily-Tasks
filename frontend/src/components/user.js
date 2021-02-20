class User{
    constructor(userJSON){
        // this.tasks = new Tasks();
        this.userId = userJSON.id;
        this.userName = userJSON.name;
        this.tasks = [];
        this.loadTasks(userJSON.tasks);
        // this.renderTasks();
    }

    loadTasks(tasks){
        tasks.forEach(task => this.tasks.push(new Task(task)));
        console.log(this.tasks)
    }
}