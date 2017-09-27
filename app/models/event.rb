# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  host_id     :integer          not null
#  address     :string           not null
#  time        :datetime         not null
#  information :text             not null
#  occured     :boolean          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  location_id :integer
#

class Event < ApplicationRecord

  validates :name, :host_id, :address, :date, :hour, :information, presence: true
  validates :occured, inclusion: { in: [true, false] }

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User

  belongs_to :location,
    primary_key: :id,
    foreign_key: :location_id,
    class_name: :Location

  has_many :rsvps,
    primary_key: :id,
    foreign_key: :event_id,
    class_name: :Rsvp

  has_many :guests,
    through: :rsvps,
    source: :attendee

  # before_validation :ensure_host_id, :ensure_location_id
  #
  # def ensure_host_id
  #   self.host_id = current_user.id
  # end
  #
  # def ensure_location_id
  #   self.location_id.to_i!
  # end


end
