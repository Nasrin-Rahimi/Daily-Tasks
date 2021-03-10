class User{
    constructor(userJSON){
        this.userId = userJSON.id;
        this.userName = userJSON.name;
        this.loadTasks(userJSON.tasks, this.userId);
    }

   loadTasks(tasks, userId){
        new Tasks(tasks, userId);
   }

}