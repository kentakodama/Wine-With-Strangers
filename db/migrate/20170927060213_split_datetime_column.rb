class SplitDatetimeColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :events, :time
    add_column :events, :date, :string
    add_column :events, :hour, :string
  end
end
