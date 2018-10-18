# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
User.reset_pk_sequence
Album.destroy_all
Album.reset_pk_sequence
Song.destroy_all
Song.reset_pk_sequence

user=User.new(email:"chris@korsk.com", password: "111111", band_name: "Kors K",
description: "i'm kors k")
path = File.join(Rails.root, 'app', "assets", "images","duetomorrow.jpg")
user.photo.attach(io: File.open(path), filename: "duetomorrow.jpg")
user.save

user1=User.new(email:"beatsguy@whatever.com", password: "111111", band_name: "Nujabez",
description: "my beats are sick")
path = File.join(Rails.root, 'app', "assets", "images","nujabes.jpg")
user1.photo.attach(io: File.open(path), filename: "nujabes.jpg")
user1.save

user2=User.new(email:"wavemusic@wavemusic.com", password: "111111", band_name: "Wave Music",
description: "feels good music")
path = File.join(Rails.root, 'app', "assets", "images","wavemusic.jpg")
user2.photo.attach(io: File.open(path), filename: "wavemusic.jpg")
user2.save

user3=User.new(email:"marsbru@whatever.com", password: "111111", band_name: "Mars Bruno",
description: "i'm not sacha baron cohen")
path = File.join(Rails.root, 'app', "assets", "images","brunomars.png")
user3.photo.attach(io: File.open(path), filename: "brunomars.png")
user3.save

user4=User.new(email:"elevven@eleveenmusic.com", password: "111111", band_name: "Elevven",
description: "brown people power")
path = File.join(Rails.root, 'app', "assets", "images","elevven.png")
user4.photo.attach(io: File.open(path), filename: "elevven.png")
user4.save

user5=User.new(email:"rnbking@soullll.com", password: "111111", band_name: "Slow Jams",
description: "my beats are sick")
path = File.join(Rails.root, 'app', "assets", "images","soulmusic.jpg")
user5.photo.attach(io: File.open(path), filename: "soulmusic.jpg")
user5.save

song = Song.new(album_id: 1, title: "Yamabiko", track_number: 1)
path=File.join(Rails.root, 'app', "assets", "songs","yamabiko.mp3")
song.track.attach(io: File.open(path), filename: "yamabiko.mp3")
