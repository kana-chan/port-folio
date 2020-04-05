class ContentsController < ApplicationController
  def index
    @contents = Content.all
  end

  def show
    @content = Content.find(params[:id])
  end

  def new
    @content = Content.new
  end

  def create
    @content = Content.new(content_params)
    @content.save
  end

  private
  def content_params
    params.require(:content).permit(
      :name,
      :image,
      :text,
      :link,
    )
  end
end
