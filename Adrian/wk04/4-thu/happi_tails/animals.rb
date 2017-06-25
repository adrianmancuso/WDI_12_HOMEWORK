
require 'pry'

class Animal

	def initialize(supplied_name, supplied_species)
		@species = supplied_species
		@name = supplied_name
		@age = get_age
		@gender = get_gender
		@toys = []
	end

	def name
		puts "#{@name} the #{@species}"
	end

	def get_age
		return rand(120)
	end

	def get_gender
		genderpool = [:male, :female, :unsure]
		return genderpool.sample
	end

	def give_toy(toy)
		@toys.push toy
	end

	def introduce
		puts "Hi! Meet #{@name}!
		Species: #{@species}
		Gender: #{@gender}
		Age: #{@age}
		Toys: #{@toys.length}
		"
	end

end

# binding.pry
	
	# def get_species
	# 	genepool = [:monkey, :lion, :baboon, :mouse, :okapi, :rhino, :shark, :elephant, :tortoise]
	# 	return genepool.sample
	# end

	# def get_name
	# 	namepool = [:happy, :stinky, :baldy, :fatty, :chewy, :slippy, :whippy, :flatty, :bumpy, :robert]
	# 	return namepool.sample
	# end
