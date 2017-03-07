class User < ApplicationRecord
  before_create :set_registration_token
  belongs_to :grade
  has_many :courses, foreign_key: :teacher_id

  accepts_nested_attributes_for :grade

  validates :name,
  presence: true

  validates :email,
  presence: true,
  uniqueness: {case_sensitive: false}

  validates :password,
  length: {in: 6..72},
  on: :create_table

  has_secure_password

  def self.authenticate(params)
    User.find_by_email(params[:email]).try(:authenticate, params[:password])
  end

  private

  def set_registration_token
    if self.registration_token.blank?
      self.registration_confirmed = true
      self.registration_token = SecureRandom.urlsafe_base64.to_s
    end
  end
end
