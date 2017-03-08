class QuestionsController < ApplicationController
  def new
    @question = Question.new
  end

  def index
    @questions = Question.where(course_id: params[:course_id])
  end

  def show
    @question = Question.find(params[:id])
  end

  def edit
    @question = Question.find(params[:id])
  end

  def create
    @question = Question.new(question_params)

    if @question.save
      render json: @question
    else
      render :new
    end
  end

  private

  def question_params
    params.require(:question).permit(:question, :course_id, :user_id)
  end
end
