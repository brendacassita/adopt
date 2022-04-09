class Api::LikedPetsController < ApplicationController
    # before_action :authenticate_user!
    #  before_action :set_user, only: [:show, :update, :delete]
    
    
    
    
      def create
    
        @pet = LikedPet.new(liked_pet_params)
        if(@pet.save)
          render json: @pet
        else
          render json: error {@pet.errors.full_messages}, status: 401
        end
      end
    
      private
    
      def set_user
        @user = current_user
      end
    
      def liked_pet_params 
        params.require(:liked_pet).permit(:user_id, :pet_id)
      end
      
    end

