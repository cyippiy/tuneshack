json.extract! @album, :id, :artist_id, :title, :description
json.photoUrl url_for(@album.photo)

json.songs @album.songs do |song|
  json.id song.id
end
