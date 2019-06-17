class SongSerializer < ActiveModel::Serializer
  attributes :id, :album_id, :title, :track_number
end
