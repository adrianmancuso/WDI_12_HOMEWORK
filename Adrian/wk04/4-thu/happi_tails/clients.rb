require 'pry'
# require_relative 'animals.rb'

class Client

	def initialize(supplied_name, supplied_gender, supplied_children)
		@gender = supplied_gender
		@age = get_age
		@name = supplied_name
		@number_of_children = supplied_children
		@pets = []
	end

	def get_age
		return rand(18..100)
	end

	def adopt_animal(animal)
		pets.push(animal)
	end

	def introduce
		puts "meet #{@name}! Age: #{@age}, #{@number_of_children} children and #{@pets.length} pets"
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
