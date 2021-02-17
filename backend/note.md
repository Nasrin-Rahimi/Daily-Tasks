1- Use rack-cors gem
    - uncomment gem 'rack-cors' and bundle 
    - Config > Initializer > cors.rb

2- Generate User model
    - User has name
    - User has many tasks 

3- Generate Tasks moedl
    - Task has title, image_url, done,  user_id
    - Task belongs to a user

4- create a rake file to do drop db, create db, migrations, seeds

5- create seed file

6- Generate users Controller 
    - use api > v1 namespace
    - create user route

7- Generate tasks Controller 
    - use api > v1 namespace
    - create task route