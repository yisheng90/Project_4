class ChangeColumnName < ActiveRecord::Migration[5.0]
  def self.up
   rename_column :videos, :file_id, :video_data
   add_column :videos, :description, :text
   add_column :videos, :view, :integer
 end

end
