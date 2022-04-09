# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models 
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
  has_many :pets 
  has_many :liked_pets, dependent: :destroy
    has_many :pets, through: :liked_pets
    has_many :adopted_pets, dependent: :destroy
    has_many :pets, through: :adopted_pets

    serialize :liked_pets, Array

    def self.unliked_pets(ids)
      ids = ids.empty ? [0] : ids
      Pet.where("ID not in (?)", ids).order("random(")
    end

    def self.liked(ids)
      ids = ids.empty? ? [0] : ids
      Pet.where("id IN (?)", ids)
    end
end
