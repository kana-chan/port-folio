class Content < ApplicationRecord
  has_many :infomation
  has_many :content_categories
    has_many :categories, through: :content_categories
end
