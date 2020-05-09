class ContentsController < ApplicationController
  before_action :move_index, only: [:new,:create,:update,:edit,:destroy]

  def index
    @contents = Content.includes(categories: :content_categories).order("id DESC")
    @categories = Category.includes(contents: :content_categories).order("number ASC")
  end

  def show
    @content = Content.includes(:infomations,categories: :content_categories).find(params[:id])
  end

  def new
    @content = Content.new
    @content.infomations.new
  end

  def create
    @content = Content.new(content_params)
    if @content.save
      redirect_to content_path(params[:id])
    else
      redirect_to root_path
    end
  end

  def edit
    @content = Content.find(params[:id])
  end

  def update
    @content = Content.find(params[:id])
    if @content.update(content_params)
      redirect_to content_path(params[:id])
    else
      redirect_to root_path
    end
  end

  def destroy
    content = Content.find(params[:id])
    content.destroy
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
  def content_params
    params.require(:content).permit(
      :name,
      :link,
      :git,
      :topImage,
      :topText,
      :catchcopy,
      :date,
      category_ids:[],
      infomations_attributes:[:image,:text,:heading,:destroy,:id]
    )
  end
end
