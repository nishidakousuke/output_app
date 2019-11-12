class Genre < ApplicationRecord
  has_many :subgenres
  validates :name, presence: true, uniqueness: true
end
