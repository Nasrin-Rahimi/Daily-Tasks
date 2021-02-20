class App{
    constructor(){
         // this.tasks = new Tasks();
       this.user = {};
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
        this.adapter.findOrCreateUser(userName).then(user => this.user = new User(user));
        console.log(this)
    }
}