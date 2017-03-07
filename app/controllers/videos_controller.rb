class VideosController < ApplicationController
  before_action :is_authenticated

  def index
    @videos = Video.all
  end

  def show
    @video = Video.find(params[:id])
  end
end
