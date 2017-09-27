class AddColumnToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :location_id, :integer
    remove_column :events, :city_id
  end
end
