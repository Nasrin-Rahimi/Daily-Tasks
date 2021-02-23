class User{
    constructor(userJSON){
        this.userId = userJSON.id;
        this.userName = userJSON.name;
        //this.tasks = userJSON.tasks;
        // this.tasks = new Tasks(userJSON.tasks);
        this.loadTasks(userJSON.tasks, this.userId);
        // console.log(this)
    }

   loadTasks(tasks, userId){
        new Tasks(tasks, userId);
   }

}