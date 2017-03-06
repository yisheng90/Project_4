class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :personal_id
      t.string :password_digest
      t.date :dob
      t.string :user_type
      t.boolean :registration_confirmed, :default => false
      t.string  :registration_token
      t.references :grade, foreign_key: true

      t.timestamps
    end
  end
end
