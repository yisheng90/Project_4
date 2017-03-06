class CreateCourses < ActiveRecord::Migration[5.0]
  def change
    create_table :courses do |t|
      t.string :title
      t.text :description
      t.references :teacher, index: true, foreign_key: { to_table: :users }
      t.references :grade, foreign_key: true

      t.timestamps
    end
  end
end
