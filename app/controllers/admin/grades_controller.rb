class Admin::GradesController < ApplicationController
  def new
  end

  def index
    @grades = Grade.all
  end
end
