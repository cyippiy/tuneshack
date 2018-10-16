class Album < ApplicationRecord

  validates :artist_id, :title, presence: true

  belongs_to :artists,
  primary_key: :id,
  foreign_key: :artist_id,
  class_name: :User

  has_one_attached :photo
end
