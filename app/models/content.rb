class Content < ApplicationRecord
  mount_uploader :image, ImageUploader

  has_many :infomations
    accepts_nested_attributes_for :infomations,                       allow_destroy: true
  has_many :content_categories
    has_many :categories, through: :content_categories
end
