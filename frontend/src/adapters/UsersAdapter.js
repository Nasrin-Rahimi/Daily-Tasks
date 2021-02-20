class UsersAdapter{

    constructor(){
        this.baseUrl = "http://localhost:3000/api/v1/users"
    }

    findOrCreateUser(userName){
        const user = {
            name: userName
        }

        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                "Accept": "application/json"
            },
            body:  JSON.stringify( {user} )
        }).then(res => res.json())
    }

}