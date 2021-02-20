class App{
    constructor(){
         // this.tasks = new Tasks();
       //this.user = {};  It's better to save user in app class or not?
       this.adapter = new UsersAdapter();
       this.initBindingsAndEventListener();
    }

    initBindingsAndEventListener(){
        this.userForm = document.getElementById('new-user-form');
        this.userForm.addEventListener('submit', this.findOrCreateUser.bind(this));
    }

    findOrCreateUser(e){
        e.preventDefault();
        const userName = e.target.children[0].value;
        this.adapter.findOrCreateUser(userName).then(user => new User(user));
    }
}