class Song < ApplicationRecord

  validates :album_id, :title, :track_number, presence:true

  belongs_to :album,
  primary_key: :id,
  foreign_key: :album_id,
  class_name: :Album

  has_one_attached :track

end
