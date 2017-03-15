class RemoveForeignkeyFromTable < ActiveRecord::Migration[5.0]
  def change
    remove_foreign_key "answers", "questions"
    remove_foreign_key "answers", "users"
    remove_foreign_key "courses", "categories"
    remove_foreign_key "courses", "grades"
    remove_foreign_key "courses", "users"
    remove_foreign_key "questions", "courses"
    remove_foreign_key "questions", "users"
    remove_foreign_key "users", "grades"
    remove_foreign_key "videos", "courses"
  end
end
