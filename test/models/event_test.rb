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

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
