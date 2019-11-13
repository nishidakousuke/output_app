class Genre < ApplicationRecord
  has_many :subgenres
  has_many :outputs
  validates :name, presence: true, uniqueness: true
end
