class RemoveDateAddStartAndEndDatesAndHoopers < ActiveRecord::Migration[5.2]
  def change
    remove_column :bookings, :date, :start_time, :end_time

    add_column :bookings, :start_date, :date
    add_column :bookings, :end_date, :date
    add_column :bookings, :hoopers, :integer
  end
end
