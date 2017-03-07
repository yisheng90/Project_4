class VideosController < ApplicationController
  before_action :is_authenticated

  def index
    @videos = Video.where(course_id: params[:course_id])
  end

  def show
    @video = Video.find(params[:id])
  end
end
