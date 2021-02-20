class User{
    constructor(userJSON){
        this.userId = userJSON.id;
        this.userName = userJSON.name;
        //this.tasks = userJSON.tasks;
        this.tasks = new Tasks(userJSON.tasks);
        // console.log(this.tasks)
        // this.initBindingsAndEventListener();
    }

    // initBindingsAndEventListener(){
    //     this.tasksContainer = document.getElementById('tasks_container');
    // }

}