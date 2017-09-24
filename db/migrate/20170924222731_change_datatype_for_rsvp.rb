class ChangeDatatypeForRsvp < ActiveRecord::Migration[5.1]
  def change
    remove_column :rsvps, :event_id
    remove_column :rsvps, :attendee_id
  end

end
