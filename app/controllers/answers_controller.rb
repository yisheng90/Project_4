class AnswersController < ApplicationController

  def index
    @answers = Answer.where(question_id: params[:question_id])
    @user = []
    @answers.collect{ |answer| @user.push(User.find(answer.user_id))}
    puts @answer

    render json: {answers: @answers, users: @user }
  end

  def create
    @answer = Answer.new(answer_params)
    @answer.user = current_user

    if @answer.save!

      render json: {answer: @answer, user: current_user}
    end
  end

  private
  def answer_params
    params.require(:answer).permit(:answer, :question_id)
  end
end
