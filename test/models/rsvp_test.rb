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

require 'test_helper'

class RsvpTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
