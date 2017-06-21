require 'pry'

class Monkey

	def initialize(starting_name, starting_species)
		@name = starting_name
		@species = starting_species
		@foods_eaten = []
		@age = rand(400)
	end

	def get_name
		return @name
	end

	def eat(food)
		@foods_eaten.push food
	end

	def introduce
		return "Hi! My name is #{@name}. I am a #{@species} and I'm #{@age} years old. I have eaten #{@foods_eaten.join(' and ')} today."
	end

end


