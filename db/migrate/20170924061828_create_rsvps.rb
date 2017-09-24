class CreateRsvps < ActiveRecord::Migration[5.1]
  def change
    create_table :rsvps do |t|
      t.string :attendee_id
      t.string :event_id
      t.timestamps
    end
  end
end
