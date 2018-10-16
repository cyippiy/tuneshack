json.albums @albums do |album|
  json.id album.id
  json.artist_id album.artist_id
  json.title album.title
  json.description album.description
end
# :id, :artist_id, :title, :description
