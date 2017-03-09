class QuestionsController < ApplicationController
  before_action :set_question, only: [:show, :edit, :destroy]
  def new
    @question = Question.new
  end

  def index
    @questions = Question.where(course_id: params[:course_id])
  end

  def show

  end

  def edit

  end

  def create
    @question = Question.new(question_params)

    if @question.save
      render json: @question
    else
      render :new
    end
  end

  def destroy
    @question.delete
  end

  private

  def set_question
    @question = Question.find(params[:id])
  end

  def question_params
    params.require(:question).permit(:question, :course_id, :user_id)
  end
end
