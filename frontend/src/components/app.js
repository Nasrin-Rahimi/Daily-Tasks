class App{
    constructor(){
         // this.tasks = new Tasks();
       //this.user = {};  It's better to save user in app class or not?
       this.adapter = new UsersAdapter();
       this.initBindingsAndEventListener();
    }

    initBindingsAndEventListener(){
        this.userContainer = document.getElementById('user-container');
        this.welcomeDiv = document.getElementById('welcome');
        this.userForm = document.getElementById('user-form');
        this.userForm.addEventListener('submit', this.findOrCreateUser.bind(this));
    }

    findOrCreateUser(e){
        e.preventDefault();
        this.userContainer.style.display = 'none';
        const userName = e.target.children[0].value;
        this.adapter.findOrCreateUser(userName)
        .then(user => new User(user))
        .then(user => this.welcomeDiv.innerHTML = `<h2>Welcome ${user.userName}</h2>`);
        
    }
}