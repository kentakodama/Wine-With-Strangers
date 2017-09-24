# == Schema Information
#
# Table name: rsvps
#
#  id          :integer          not null, primary key
#  attendee_id :string
#  event_id    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Rsvp < ApplicationRecord

  validates :id, :event_id, :attendee_id, presence: true

  belongs_to :event,
    primary_key: :id,
    foreign_key: :event_id,
    class_name: :Event

  belongs_to :attendee,
    primary_key: :id,
    foreign_key: :attendee_id,
    class_name: :User

end
