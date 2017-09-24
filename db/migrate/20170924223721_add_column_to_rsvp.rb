class AddColumnToRsvp < ActiveRecord::Migration[5.1]
  def change
    add_column :rsvps, :event_id, :integer
    add_column :rsvps, :attendee_id, :integer
  end
end
