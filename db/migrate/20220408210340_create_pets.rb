class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :image
      t.string :species
      t.text :description
      t.float :minimum_donation
      t.boolean :adopted
      t.belongs_to :user, null:false, foreign_key:true

      t.timestamps
    end
  end
end
