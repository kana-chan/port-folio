class CategoriesController < ApplicationController
  before_action :move_index, only: [:new,:create,,:edit,:update,:destroy]

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
  def move_index
    if !user_signed_in? || current_user.id != 1
      redirect_to root_path
    end
  end
  # ================================================
  private
  def category_params
    params.require(:category).permit(
      :name,
      :text,
      :number,
      :icon
    )
  end
end
