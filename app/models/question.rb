class Question < ApplicationRecord
  belongs_to :course
  has_many :answers, dependent: :destroy
  belongs_to :user
end
