class AddDefaultImgUrl < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :img_url, :string, default: "https://res.cloudinary.com/dql6mlrow/image/upload/v1506680154/Screen_Shot_2017-09-29_at_3.15.19_AM_jcucml.png"
  end
end
