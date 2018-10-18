json.albums @albums do |album|
  json.id album.id
  json.artist_id album.artist_id
  json.title album.title
  json.description album.description
  json.photoUrl url_for(album.photo)

  json.songs album.songs do |song|
    json.id song.id
  end
end
