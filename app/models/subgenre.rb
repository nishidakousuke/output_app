class Subgenre < ApplicationRecord
  belongs_to :genre
  has_many :outputs
  validates :name, presence: true, uniqueness: true
end
