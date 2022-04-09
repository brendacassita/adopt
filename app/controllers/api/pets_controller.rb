class Api::PetsController < ApplicationController
    before_action :set_pet, only: [:show, :update, :destroy]
    before_action :authenticate_user!

def index
  render json: Pet.all
end

def index_liked
  liked_pets_ids = current_user.liked_pets
  render json: User.unliked_pets(liked_pets_ids)
end

def my_pets
  liked_pets_ids = current_user.liked_pets
  render json: User.liked(liked_pets_ids)
end

def show
  render json: @pet
end

def destroy
  render json: @pet.destroy
end

def create 
  @pet = Pet.new(pet_params)
  if(@pet.save)
    render json: @pet
  else
    render json: {errors: @pet.errors.full_messages}, status: 422
  end
end

  def update
    if(@pet.update(pet_params))
      render json: pet 
    else
      render json: {errors: @pet.errors.full_messages}, status: 422
    end
  end

  def update_liked
    current_user.liked_pets.push(params[:id].to_i)
    current_user.save
  end

  private

  def pet_params
    params.require(:pet).permit(:user_id, :image, :adopted, :name, :species, :description, :minimum_donation)
  end

  def set_pet
    @pet = Pet.find(params[:id])
  end
end

