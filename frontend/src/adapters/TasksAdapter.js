class TasksAdapter{
    constructor(){
        this.baseUrl = "http://localhost:3000/api/v1/users/1/tasks"
    }

    getTasks(){
        return fetch(this.baseUrl).then(res => res.json());
    }

    createTask(task){
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify( {task} ),
        })
        .then(res => res.json())
    }

    updateTask(task){
        // console.log(task);
        fetch(`${this.baseUrl}/${task.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                "Accept": "application/json"
            },
            body:  JSON.stringify( {task} )
        })
    }

}