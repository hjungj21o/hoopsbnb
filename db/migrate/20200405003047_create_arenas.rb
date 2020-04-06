class CreateArenas < ActiveRecord::Migration[5.2]
  def change
    create_table :arenas do |t|
      t.string :address, null: false
      t.string :city, null:false
      t.integer :gm_id, null:false
      t.text :description, null:false
      t.integer :price, null:false
      t.float :lat, null:false
      t.float :long, null:false

      t.timestamps
    end

    add_index :arenas, :address
    add_index :arenas, :gm_id
  end
end
