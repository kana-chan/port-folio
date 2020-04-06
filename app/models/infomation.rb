class Infomation < ApplicationRecord
  mount_uploader :image, ImageUploader

  belongs_to :content
end
