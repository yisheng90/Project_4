class CreateVideos < ActiveRecord::Migration[5.0]
  def change
    create_table :videos, force: true do |t|
      t.string :file_id
      t.string :title

      t.timestamps
    end
  end
end
