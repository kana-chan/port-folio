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
  end

  def update
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
      infomations_attributes:[:image,:text,:heading]
    )
  end
end
