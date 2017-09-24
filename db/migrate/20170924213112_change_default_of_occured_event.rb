class ChangeDefaultOfOccuredEvent < ActiveRecord::Migration[5.1]
  def change
    change_column :events, :occured, :boolean, default: false
  end
end
