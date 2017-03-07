class Teacher::VideosController < ApplicationController
  def index
  end

  def show
  end

  def new
    @video = Video.new
  end

  def edit
    @video = Video.find(params[:id])
  end

  def create
    @video = Video.new(video_params)

    if @video.save
      redirect_to  root_path
    else
      render :new
    end
  end

  private

  def video_params
    params.require(:video).permit(:video)
  end
end
