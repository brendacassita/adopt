class LikedPet < ApplicationRecord
    belongs_to :user
    belongs_to :pet
end
