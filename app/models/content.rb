class Content < ApplicationRecord
  mount_uploader :image, ImageUploader

  has_many :infomations
  has_many :content_categories
    has_many :categories, through: :content_categories
end
