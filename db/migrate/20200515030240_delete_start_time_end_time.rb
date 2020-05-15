class DeleteStartTimeEndTime < ActiveRecord::Migration[5.2]
  def change
    remove_column :bookings, :start_time
    remove_column :bookings, :end_time
  end
end
