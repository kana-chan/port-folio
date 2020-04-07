class ContentsController < ApplicationController
  def index
    @contents = Content.all.order("id DESC")
  end

  def show
    @content = Content.find(params[:id])
  end

  def new
    @content = Content.new
    @content.infomations.new
  end

  def create
    @content = Content.new(content_params)
    @content.save
    redirect_to root_path
  end

  def edit
    @content = Content.find(params[:id])
  end

  def update
    @content = Content.find(params[:id])
    @content.update(content_params)
    redirect_to root_path
  end

  def destroy
    content = Content.find(params[:id])
    content.destroy
    redirect_to root_path
  end

# ================================================
  private
  def content_params
    params.require(:content).permit(
      :name,
      :image,
      :text,
      :link,
      category_ids:[],
      infomations_attributes:[:image,:text,:heading,:destroy,:id]
    )
  end
end
