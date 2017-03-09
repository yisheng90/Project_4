class Admin::CategoriesController < Admin::BaseController
  def index
    @categories = Category.all
  end

  def create
    @category = Category.new(category_params)

    if @category.save
      render json: @category.as_json.merge(courses: @category.courses.as_json )
    else
      redirect_to admin_categories_path
    end
  end

  def update
    @category = Category.find(params[:id])
    @category.update(category_params)
    render json: @category.as_json.merge(courses: @category.courses.as_json )
  end

  def destroy
      @category = Category.find(params[:id])
      @category.delete
      render json: @category
  end

  private

  def category_params
    params.require(:category).permit(:category)
  end
end
