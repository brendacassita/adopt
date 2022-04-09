# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
User.destroy_all

10.times do
    u = User.create(
      name: Faker::Name.name,
      email: Faker::Internet.email,
      password: "123456")
2.times do
    name = Faker::FunnyName.name
    species = Faker::Creature::Animal.name 
    image = Faker::Avatar.image(slug: name, size: '1080x1350', format: 'png', set: 'set1')
    adopted = Faker::Boolean.boolean
    description = "#{name} is a great #{species} and is #{Faker::Number.digit} years old."
    Pet.create(name: name, image: image, adopted: adopted, species: species, description: description, user_id: u.id)
    

  end

end