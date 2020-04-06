class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :hooper_id, null:false
      t.integer :arena_id, null:false
      t.datetime :date, null:false
      t.datetime :start_time, null:false
      t.datetime :end_time, null:false

      t.timestamps
    end

    add_index :bookings, [:hooper_id ,:arena_id], unique: true
  end
end
