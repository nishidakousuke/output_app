class Output < ApplicationRecord
  belongs_to :genre
  belongs_to :subgenre
  has_one_attached :image
end
