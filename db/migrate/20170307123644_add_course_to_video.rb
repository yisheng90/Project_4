class AddCourseToVideo < ActiveRecord::Migration[5.0]
  def change
    add_reference :videos, :course, foreign_key: true
  end
end
