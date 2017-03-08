class AddStatusToCourse < ActiveRecord::Migration[5.0]
  def change
    add_column :courses, :status, :boolean, :default => false
  end
end
