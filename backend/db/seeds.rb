# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: 'Mateen')
User.create(name: 'Parsa')

Task.create(title: 'Brush My Teeth', done: false, user_id: 1, image_url: 'https://i.pinimg.com/originals/44/56/06/4456060fd88aad2ff0ab91ceee54d86e.jpg')
Task.create(title: 'Make My Bed', done: false, user_id: 1, image_url: 'https://www.clipartkey.com/mpngs/m/5-59512_bed-make-clipart-clip-art-images-transparent-png.png')
Task.create(title: 'Pick Up Toys', done: false, user_id: 1, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZJx2IAbfHYuagyom34F_OfBwPCi8TO3eIg&usqp=CAU')
Task.create(title: 'Eat Fruits', done: false, user_id: 1, image_url: 'https://thumbs.dreamstime.com/z/child-healthy-food-14021377.jpg')
Task.create(title: 'Dishe To The Sink', done: false, user_id: 1, image_url: 'https://webstockreview.net/images/dishes-clipart-sink-clipart.jpg')
Task.create(title: 'Get Dressed', done: false, user_id: 1, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEROLQXYr9-tSCfzDfwPZOuvjrfs1SIQ6hEw&usqp=CAU')
Task.create(title: 'Take a Bath', done: false, user_id: 1, image_url: 'https://cdn2.vectorstock.com/i/1000x1000/76/31/cartoon-child-taking-a-bath-vector-5617631.jpg')
Task.create(title: 'Play Piano', done: false, user_id: 1, image_url: 'https://thumbs.dreamstime.com/b/illustration-boy-girl-playing-piano-music-musician-childhood-pianist-children-vector-activity-entertainment-hobby-kids-157365796.jpg')


Task.create(title: 'Brush My Teeth', done: false, user_id: 2, image_url: 'https://i.ytimg.com/vi/-eqbUgsI3RQ/maxresdefault.jpg')
Task.create(title: 'Sing a Song', done: false, user_id: 2, image_url: 'https://previews.123rf.com/images/colorfuelstudio/colorfuelstudio2001/colorfuelstudio200101740/138519494-happy-cute-kid-boy-sing-a-song.jpg')
Task.create(title: 'Pick Up Toys', done: false, user_id: 2, image_url: 'https://i.pinimg.com/originals/87/12/03/8712034c6c9b2edc7ea120cf88d0c301.jpg')
Task.create(title: 'Eat Fruits', done: false, user_id: 2, image_url: 'http://zahibutik.com/wp-content/uploads/2018/07/Cute-baby-eating-fruits.jpg')


