class CreateAdoptedPets < ActiveRecord::Migration[6.1]
  def change
    create_table :adopted_pets do |t|
      t.belongs_to :user, null:false, foreign_key:true
      t.belongs_to :pet, null:false, foreign_key:true
      t.float :adopted_price

      t.timestamps
    end
  end
end
