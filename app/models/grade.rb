class Grade < ApplicationRecord

  has_many :courses
  validates :grade,
  presence: true
end
