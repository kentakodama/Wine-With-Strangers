# == Schema Information
#
# Table name: locations
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Location < ApplicationRecord

  validates :name, presence: true

  has_many :events,
    primary_key: :id,
    foreign_key: :location_id,
    class_name: :Event



end
