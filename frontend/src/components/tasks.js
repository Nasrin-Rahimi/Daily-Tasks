class Tasks{
    constructor(tasksJSON, userId){
        this.adapter = new TasksAdapter();
        this.tasks = [];
        this.userId = userId;
        this.initBindingsAndEventListener();
        this.loadTasks(tasksJSON);
        this.renderTasks();
        console.log(this)
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
        const task = { 
            title: e.target.children[0].value,
            image_url: e.target.children[2].value,
            done: false,
            user_id: 6
        };
        console.log(this);
        // this.adapter.findOrCreateUser(userName)
        // .then(user => new User(user))
        // .then(user => this.welcomeDiv.innerHTML = `<h2>Welcome ${user.userName}</h2>`);
        
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