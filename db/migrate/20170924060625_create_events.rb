class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.integer :host_id, null: false
      t.string :address, null: false
      t.datetime :time, null: false
      t.integer :city_id, null: false
      t.text :information, null: false
      t.boolean :occured, null: false
      t.timestamps
    end
    add_index :events, :id, unique: true
  end
end
