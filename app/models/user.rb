class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  has_one_attached :photo

  has_many :albums,
  primary_key: :id,
  foreign_key: :artist_id,
  class_name: :Album

  after_initialize :ensure_session_token, :ensure_img

  attr_reader :password

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def generate_unique_session_token
    self.session_token = SecureRandom.urlsafe_base64
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

  def reset_session_token
    generate_unique_session_token
    self.save!
    self.session_token
  end

  def self.find_by_credentials(email,password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def ensure_img
    self.photo.attach(io: File.open("../assets/images/Blank-person-photo.png"), filename: "Blank-person-photo.png") unless self.photo.attached?
  end

end
