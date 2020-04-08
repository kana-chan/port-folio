class CategoriesController < ApplicationController
  def new
    @category = Category.new
  end

  def create
    @category = Category.new(category_params)
    @category.save
    redirect_to root_path
  end

  def edit
    @category = Category.find(params[:id])
  end

  def update
    @category = Category.find(params[:id])
    @category.update(category_params)
    redirect_to root_path
  end

  def destroy
    category = Category.find(params[:id])
    category.destroy
    redirect_to root_path
  end

  # ================================================
  private
  def category_params
    params.require(:category).permit(
      :name,
      :color
    )
  end
end
