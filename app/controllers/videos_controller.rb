class VideosController < ApplicationController
  before_action :is_authenticated
  
  def new
    @video = Video.new
  end

  def index
  end

  def show
    @video = Video.find(params[:id])
  end

  def create
    @video = Video.new(video_params)

    if @video.save
      redirect_to video_path(@video)
    else
      render :new
    end
  end

  private

  def video_params
    params.require(:video).permit(:file)
  end
end
