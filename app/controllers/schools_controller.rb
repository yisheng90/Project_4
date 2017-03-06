class SchoolsController < ApplicationController
  before_action :is_admin, only: [:show]

  def show
    @teacher = User.find_by('(user_type =?)', 'teacher')
    @student = User.find_by('(user_type =?)', 'student')
  end


end
