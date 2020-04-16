class RemoveUniqueConstraintforBookings < ActiveRecord::Migration[5.2]
  def change

    remove_index :bookings, [:hooper_id ,:arena_id]
    add_index :bookings, [:hooper_id ,:arena_id]
  end
end
