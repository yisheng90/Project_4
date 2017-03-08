class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.string :question
      t.references :course, foreign_key: true

      t.timestamps
    end
  end
end
