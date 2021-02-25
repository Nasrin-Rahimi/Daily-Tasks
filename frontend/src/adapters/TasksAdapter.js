class TasksAdapter{
    constructor(){
        this.baseUrl = "http://localhost:3000/api/v1/users/1/tasks"
    }

    getTasks(){
        return fetch(this.baseUrl).then(res => res.json());
    }

    createTask(title, image_url, userId){
        const task = { 
            title: title,
            image_url: image_url,
            done: false,
            user_id: userId
        };
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
        return fetch(`${this.baseUrl}/${task.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                "Accept": "application/json"
            },
            body:  JSON.stringify( {task} )
        })
        .then(res => res.json())
    }

    deleteTask(taskId){
        return fetch(`${this.baseUrl}/${taskId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                "Accept": "application/json"
            }
        })
        .then(res => res.json())
    }

}