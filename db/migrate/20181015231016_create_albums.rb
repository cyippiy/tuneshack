class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.integer :artist_id, null:false
      t.string :title, null:false
      t.text :description
      t.timestamps
    end
    add_index :albums, :artist_id
    add_index :albums, :title
  end
end
