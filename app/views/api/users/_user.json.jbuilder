json.extract! user, :id, :email, :band_name, :description
json.albums user.albums do |album|
  json.id album.id
end
