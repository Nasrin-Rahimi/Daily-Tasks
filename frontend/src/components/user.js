class User{
    constructor(userJSON){
        this.userId = userJSON.id;
        this.userName = userJSON.name;
        //this.tasks = userJSON.tasks;
        // this.tasks = new Tasks(userJSON.tasks);
        this.loadTasks(userJSON.tasks);
        console.log(this)
    }

   loadTasks(tasks){
        new Tasks(tasks);
   }

}