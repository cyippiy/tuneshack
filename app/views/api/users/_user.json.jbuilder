json.ignore_nil! false

json.extract! user, :id, :email, :band_name, :description
json.photoUrl url_for(user.photo)
json.albums user.albums do |album|
  json.id album.id
end
