class ArenaTableAddNameColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :arenas, :name, :string, null: false
  end
end
