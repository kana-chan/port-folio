class Content < ApplicationRecord
  mount_uploader :topImage, ImageUploader

  has_many :infomations,dependent: :delete_all 
    accepts_nested_attributes_for :infomations,allow_destroy: true
  has_many :content_categories,dependent: :delete_all 
    has_many :categories, through: :content_categories
end
