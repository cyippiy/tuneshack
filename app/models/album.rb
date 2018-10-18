class Album < ApplicationRecord

  validates :artist_id, :title, presence: true

  belongs_to :artists,
  primary_key: :id,
  foreign_key: :artist_id,
  class_name: :User

  has_many :songs,
  primary_key: :id,
  foreign_key: :album_id,
  class_name: :Song

  has_one_attached :photo
  # before_save :ensure_img

  def ensure_img
    path = File.join(Rails.root, 'app', "assets", "images","blankalbum.jpg")
    self.photo.attach(io: File.open(path), filename: "blankalbum.jpg") unless self.photo.attached?
  end

end
