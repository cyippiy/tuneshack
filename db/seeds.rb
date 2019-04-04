# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
User.reset_sequence_name
Album.destroy_all
Album.reset_sequence_name
Song.destroy_all
Song.reset_sequence_name

user=User.new(email:"chris@korsk.com", password: "111111", band_name: "Kors K",
description: "Kors K is a legend in the bemani scene. With over 20 years of making a variety of music, you'll recognize his signature beats anywhere.")
path = File.join(Rails.root, 'app', "assets", "images","duetomorrow.jpg")
user.photo.attach(io: File.open(path), filename: "duetomorrow.jpg")
user.save

user1=User.new(email:"beatsguy@whatever.com", password: "111111", band_name: "Nujabez",
description: "The late Nujabez was a legend in the underground hip hop scene. Because of him, the 90s style hip hop beats movement still continues to this day. RIP Nujabez")
path = File.join(Rails.root, 'app', "assets", "images","nujabes.jpg")
user1.photo.attach(io: File.open(path), filename: "nujabes.jpg")
user1.save

user2=User.new(email:"wavemusic@wavemusic.com", password: "111111", band_name: "Wave Music",
description: "This Indian Duo from Northern California are brothers with a passion in music. ")
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

user5=User.new(email:"lkp@soullll.com", password: "111111", band_name: "LINK IN PARK",
description: "EMO SONGS")
path = File.join(Rails.root, 'app', "assets", "images","city background.jpg")
user5.photo.attach(io: File.open(path), filename: "city background.jpg")
user5.save

user5=User.new(email:"zektbach@zektbach.com", password: "111111", band_name: "Zektbach",
description: "EMO SONGS")
path = File.join(Rails.root, 'app', "assets", "images","epic of zektbach masinowa.jpg")
user5.photo.attach(io: File.open(path), filename: "epic of zektbach masinowa.jpg")
user5.save


album=Album.new(artist_id: 1, title: "bemani music",description: "bemani music! some of the hottest tracks from DDR to beatmania");
path = File.join(Rails.root, 'app', "assets", "images","kors-k.jpg")
album.photo.attach(io: File.open(path), filename: "kors-k.jpg")
album.save

album2=Album.new(artist_id: 2, title: "Sick beats 1",description: "songs from the legend. Here was his first track of goodness");
path = File.join(Rails.root, 'app', "assets", "images","blankalbum.jpg")
album2.photo.attach(io: File.open(path), filename: "blankalbum.jpg")
album2.save

album3=Album.new(artist_id: 2, title: "Sick beats 2",description: "Another album designed to make you feel good. RIP to the legend");
path = File.join(Rails.root, 'app', "assets", "images","blankalbum.jpg")
album3.photo.attach(io: File.open(path), filename: "blankalbum.jpg")
album3.save

album4=Album.new(artist_id: 4, title: "MARS BRUNO",description: "some top notch songs. Let's jam to his goodness.");
path = File.join(Rails.root, 'app', "assets", "images","brunomars.png")
album4.photo.attach(io: File.open(path), filename: "brunomars.png")
album4.save

album5=Album.new(artist_id: 5, title: "beyond the moon",description: "space looks nice. wouldn't you agree?");
path = File.join(Rails.root, 'app', "assets", "images","elevven.png")
album5.photo.attach(io: File.open(path), filename: "elevven.png")
album5.save

album6=Album.new(artist_id: 6, title: "Park of Lincoln greatest hits",description: "some top notch songs. Let these early 2000 hits make you jam out");
path = File.join(Rails.root, 'app', "assets", "images","city background.jpg")
album6.photo.attach(io: File.open(path), filename: "city background.jpg")
album6.save

album7=Album.new(artist_id: 5, title: "Deep stuff",description: "deeep vibes. for the deep house lovers.");
path = File.join(Rails.root, 'app', "assets", "images","soulmusic.jpg")
album7.photo.attach(io: File.open(path), filename: "soulmusic.jpg")
album7.save

album8=Album.new(artist_id: 8, title: "The Epic of Zektbach",description: "Long ago in a far away land, there was a war between three factions. this is their story. ");
path = File.join(Rails.root, 'app', "assets", "images","epic of zektbach masinowa.jpg")
album8.photo.attach(io: File.open(path), filename: "epic of zektbach masinowa.jpg")
album8.save



song = Song.new(album_id: 1, title: "Yamabiko", track_number: 1)
path=File.join(Rails.root, 'app', "assets", "songs","yamabiko.mp3")
song.track.attach(io: File.open(path), filename: "yamabiko.mp3")
song.save

song1 = Song.new(album_id: 1, title: "Back Spin Sweeper", track_number: 2)
path=File.join(Rails.root, 'app', "assets", "songs","back spin sweeper.mp3")
song1.track.attach(io: File.open(path), filename: "back spin sweeper.mp3")
song1.save

song2 = Song.new(album_id: 2, title: "luv sik", track_number: 1)
path=File.join(Rails.root, 'app', "assets", "songs","luv sik.mp3")
song2.track.attach(io: File.open(path), filename: "luv sik.mp3")
song2.save

song3 = Song.new(album_id: 3, title: "winter lane", track_number: 1)
path=File.join(Rails.root, 'app', "assets", "songs","winter lane.mp3")
song3.track.attach(io: File.open(path), filename: "winter lane.mp3")
song3.save

song4 = Song.new(album_id: 4, title: "fin ES", track_number: 1)
path=File.join(Rails.root, 'app', "assets", "songs","finesse.mp3")
song4.track.attach(io: File.open(path), filename: "finesse.mp3")
song4.save

song4 = Song.new(album_id: 4, title: "uptown funkkkky", track_number: 1)
path=File.join(Rails.root, 'app', "assets", "songs","uptown funk.mp3")
song4.track.attach(io: File.open(path), filename: "uptown funk.mp3")
song4.save

song5 = Song.new(album_id: 5, title: "beyond the moon", track_number: 1)
path=File.join(Rails.root, 'app', "assets", "songs","beyond the moon.mp3")
song5.track.attach(io: File.open(path), filename: "beyond the moon.mp3")
song5.save

song6 = Song.new(album_id: 6, title: "enth E Nd", track_number: 1)
path=File.join(Rails.root, 'app', "assets", "songs","enth E Nd.mp3")
song6.track.attach(io: File.open(path), filename: "enth E Nd.mp3")
song6.save

song7 = Song.new(album_id: 6, title: "session", track_number: 2)
path=File.join(Rails.root, 'app', "assets", "songs","session.mp3")
song7.track.attach(io: File.open(path), filename: "session.mp3")
song7.save

song8 = Song.new(album_id: 7, title: "Our generation", track_number: 1)
path=File.join(Rails.root, 'app', "assets", "songs","our generation.mp3")
song8.track.attach(io: File.open(path), filename: "our generation.mp3")
song8.save

song9 = Song.new(album_id: 7, title: "No Peace", track_number: 2)
path=File.join(Rails.root, 'app', "assets", "songs","No Peace.mp3")
song9.track.attach(io: File.open(path), filename: "No Peace.mp3")
song9.save

song10 = Song.new(album_id: 8, title: " Ark Ouroboros", track_number: 1)
path=File.join(Rails.root, 'app', "assets", "songs","ark.mp3")
song10.track.attach(io: File.open(path), filename: "ark.mp3")
song10.save

song11 = Song.new(album_id: 8, title: " Fragment", track_number: 2)
path=File.join(Rails.root, 'app', "assets", "songs","fragment.mp3")
song11.track.attach(io: File.open(path), filename: "fragment.mp3")
song11.save

song12 = Song.new(album_id: 8, title: " Overture", track_number: 3)
path=File.join(Rails.root, 'app', "assets", "songs","overture.mp3")
song12.track.attach(io: File.open(path), filename: "overture.mp3")
song12.save

song13 = Song.new(album_id: 8, title: " Aria te'Laria", track_number: 3)
path=File.join(Rails.root, 'app', "assets", "songs","aria te_Laria.mp3")
song13.track.attach(io: File.open(path), filename: "aria te_Laria.mp3")
song13.save

