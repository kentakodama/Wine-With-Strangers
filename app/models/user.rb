# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  img_url         :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  has_many :rsvps,
    primary_key: :id,
    foreign_key: :attendee_id,
    class_name: :Rsvp

  has_many :hosted_events,
    primary_key: :id,
    foreign_key: :event_id,
    class_name: :Event

  has_many :events,
    through: :rsvps,
    source: :event

  after_initialize :ensure_session_token

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.valid_password?(password)
    user
  end


end
