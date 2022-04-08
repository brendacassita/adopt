class Pet < ApplicationRecord
    belongs_to :user
    has_many :liked_pets 
    has_many :users, through: :liked_pets
    has_many :adopted_pets
    has_many :users, through: :adopted_pets

end
