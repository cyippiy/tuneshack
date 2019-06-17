class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :artist_id, :title, :description
end
