class TasksAdapter{
    constructor(){
        this.baseUrl = "http://localhost:3000/api/v1/users/1/tasks"
    }

    getTasks(){
        return fetch(this.baseUrl).then(res => res.json());
    }
}