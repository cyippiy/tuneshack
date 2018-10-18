# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(email:"chris", password: "111111", band_name: "kors k",
description: "i'm kors k")
User.first.photo.attach(io: File.open("../assets/images/duetomorrow.jpg"), filename: "duetomorrow.jpg")
User.create(email:"stef", password: "111111", band_name: "STEF",
description: "i'm STEF")
