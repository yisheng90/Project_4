class Teacher::VideosController < ApplicationController
  def index
  end

  def show
  end

  def new
    @video = Video.new
    @course = Course.find(params[:course_id])
  end

  def edit
    @video = Video.find(params[:id])
    @course = Course.find(params[:course_id])
  end

  def create
    @video = Video.new(video_params)
    @course = Course.find(params[:course_id])
    @video.course = @course

    if @video.save
      redirect_to  root_path
    else
      render :new
    end
  end

  private

  def video_params
    params.require(:video).permit(:video, :title, :description)
  end
end
