class Course < ApplicationRecord
  belongs_to :teacher, class_name: User
  belongs_to :grade
  belongs_to :category
  accepts_nested_attributes_for :grade, :category
  has_many :videos
  has_many :questions
end
