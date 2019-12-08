class Output < ApplicationRecord
  belongs_to :genre
  belongs_to :subgenre
  has_one_attached :image

  def self.search(search)
    return Output.all() unless search
    Output.where('title LIKE(?)', "%#{search}%")
  end
end
