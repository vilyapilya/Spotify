class User < ActiveRecord::Base

  validates :username, :session_token, :password_digest, :email, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  attr_reader :password

  has_many :audiobooks

  has_many :friend_relations,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :Friend

  has_many :friends,
  through: :friend_relations,
  source: :user

  after_initialize :ensure_session_token

  def password=(password)
    self.password_digest = BCrypt::Password.create(@password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.base64(16);
    self.session_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return user if user && user.is_password?(password)
    nil
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.base64(16);
    self.session_token
  end

end
