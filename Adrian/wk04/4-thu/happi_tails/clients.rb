
require 'pry'
require_relative 'animal_shelter.rb'

class Client

	def initialize(supplied_name, supplied_gender, supplied_children)
		@gender = supplied_gender
		@age = get_age
		@name = supplied_name
		@number_of_children = supplied_children
		@pets = {}
	end

	def name
		@name
	end

	def pets
		@pets
	end

	def get_age
		return rand(18..100)
	end

	def adopt_animal(animal)
		binding.pry
		@pets[animal.name] = @animals.delete(animal.name)
	end

	def display_properties
		puts "Client: #{@name}! 
		Age: #{@age}
		#{@number_of_children} children 
		and 
		#{@pets.length} pet(s):
		#{@pets.each {|x, y, z| puts x}}"
	end

end

# binding.pry

	# def get_gender
	# 	possibilites = [:male, :female]
	# 	return possibilites.sample
	# end

	# def get_female_name
	# 	female_name_pool = [:Amelia, :Olivia, :Isla, :Emily, :Isabella, :Jessica, :Lily, :Sophie, :Grace, :Mia, :StinkGirl, :Ugly]
	# 	return female_name_pool.sample
	# end

	# def get_male_name
	# 	male_name_pool = [:Oliver, :Jack, :Harry, :Bobby, :Oscar, :Billy, :Rupert, :Robert, :JimmyJoJo, :Noah]
	# 	return male_name_pool.sample
	# end

	# def check_children
	# 	return rand(5)
	# end
