class RenameLongToLng < ActiveRecord::Migration[5.2]
  def change
    rename_column :arenas, :long, :lng
  end
end
