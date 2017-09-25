class ChangeColumnName < ActiveRecord::Migration[5.1]
  def change
    remove_column :locations, :image_url
    add_column :locations, :img_url, :string
  end
end
