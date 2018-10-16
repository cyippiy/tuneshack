json.users @users do |user|
  json.id user.id
  json.email user.email
  json.band_name user.band_name
  json.description user.description

  json.albums user.albums do |album|
    json.id album.id
  end
end

# json.array! @user , :id, :email, :band_name, :description
