class Tasks{
    constructor(tasksJSON, userId){
        this.adapter = new TasksAdapter();
        this.tasks = [];
        this.userId = userId;
        this.initBindingsAndEventListener();
        this.loadTasks(tasksJSON);
        this.renderTasks();
        // console.log(this)
    }

    initBindingsAndEventListener(){
        this.tasksContainer = document.getElementById('tasks_container');
        this.messageDiv = document.getElementById('message-div');
        this.newTaskBtn = document.getElementById('new-task-btn');
        this.newTaskContainer = document.getElementById('new-task-container');
        this.newTaskForm = document.getElementById('new-task-form');
        this.tasksContainer.addEventListener('change', this.doneTask.bind(this));
        this.newTaskBtn.addEventListener('click', this.newTask.bind(this));
        this.newTaskForm.addEventListener('submit', this.createTask.bind(this));
        // this.allTasks = document.querySelectorAll(".delete");
        this.tasksContainer.addEventListener('click', this.deleteTask.bind(this));
    }

    loadTasks(tasksJSON){
        tasksJSON.forEach(task => this.tasks.push(new Task(task)));
    }

    doneTask(e){
        const task = this.tasks.find(task => task.id == e.target.id);
        task.done = true;
        this.adapter.updateTask(task);
        e.target.parentNode.classList.add('checked');
    }
    
    newTask(e){
        this.newTaskContainer.style.display == 'block' ? 
            this.newTaskContainer.style.display = 'none' : 
            this.newTaskContainer.style.display = 'block';
    }

    createTask(e){
        e.preventDefault();
        let title = e.target.children[0].value;
        let image_url = e.target.children[2].value;
        const task = { 
            title: title,
            image_url: image_url,
            done: false,
            user_id: this.userId
        };
        this.adapter.createTask(task)
        .then(task =>{
            this.tasks.push(new Task(task));
            this.renderTasks();
            this.newTaskContainer.style.display = 'none';
            title = "";
            image_url = "";
        });

        // this.adapter.createNote(value).then(note => {
        //     this.notes.push(new Note(note))
        //     this.newNoteBody.value = ''
        //     this.render();
        // });
        // .then(user => new User(user))
        // .then(user => this.welcomeDiv.innerHTML = `<h2>Welcome ${user.userName}</h2>`);
        
    }

    deleteTask(e){
        if(e.target && e.target.nodeName == "BUTTON") {
            console.log(e.target.id + " was clicked");
        }
    }

    renderTasks(){
        this.newTaskBtn.style.display = 'block';
        if (this.tasks.length > 0){
            this.tasksContainer.style.display = "block";
            this.messageDiv.style.display = "none";
            this.tasksContainer.innerHTML = this.tasks.map(task => task.renderTask()).join('');
        }
        else{
            this.tasksContainer.style.display = "none";
            this.messageDiv.style.display = "block";
            this.messageDiv.innerHTML = `<h2>You don't have any task. Let add your Daily Tasks!</h2>`;
        }
    }
}