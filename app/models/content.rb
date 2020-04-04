class Content < ApplicationRecord
  has_many :images
  has_many :texts
  has_many :content_categories
    has_many :categories, through: :content_categories
end
