class Category < ApplicationRecord
  has_many :content_categories
    has_many :contents, through: :content_categories 

  validates :name,                      uniqueness: true
  validates :color,                     uniqueness: true
end
