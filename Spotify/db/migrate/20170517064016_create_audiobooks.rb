class CreateAudiobooks < ActiveRecord::Migration
  def change
    create_table :audiobooks do |t|
      t.string :author, null: false
      t.string :title, null: false
      t.text :description
      t.string :image_url
      t.string :audio_url, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :audiobooks, :title
    add_index :audiobooks, :author
  end
end
