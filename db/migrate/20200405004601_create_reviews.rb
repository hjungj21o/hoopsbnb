class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :author_id, null:false
      t.integer :arena_id, null:false
      t.integer :rating, null:false
      t.text :body, null:false

      t.timestamps
    end

    add_index :reviews, :author_id, unique: true
    add_index :reviews, :arena_id, unique: true
  end
end
