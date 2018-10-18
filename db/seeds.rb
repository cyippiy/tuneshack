# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

user=User.new(email:"chris", password: "111111", band_name: "kors k",
description: "i'm kors k")
user.save
path = File.join(Rails.root, 'app', "assets", "images","duetomorrow.jpg")
user.photo.attach(io: File.open(path), filename: "duetomorrow.jpg")
# user1=User.create(email:"stef", password: "111111", band_name: "STEF",
# description: "i'm STEF")
#
