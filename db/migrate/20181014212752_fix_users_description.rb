class FixUsersDescription < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :descrption, :description
  end
end
