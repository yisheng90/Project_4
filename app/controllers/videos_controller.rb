class VideosController < ApplicationController
  before_action :is_authenticated

  def index
    @videos = Video.where(course_id: params[:course_id])
    @teacher = @videos[0].course.teacher
    @course = @videos[0].course
    render json: {videos: @videos, teacher: @teacher, course: @course}
  end

  def show
    @video = Video.find(params[:id])
  end
end
