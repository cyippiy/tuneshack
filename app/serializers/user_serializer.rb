class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :band_name, :description
end
