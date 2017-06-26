
require 'pry'
require_relative 'animal_shelter.rb'
require_relative 'animals.rb'
require_relative 'clients.rb'

puts "Welcome to HappiTails!"

main_program = "run"


def client_maker
	puts "Let's make some clients. Choose a name"
	@name = gets.chomp.capitalize
	puts "Is #{@name} male or female?"
	@gender = gets.chomp
	puts "And how many children does #{@name} have?"
	@children = gets.to_i

	@clients.store "#{@name}", Client.new(@name, @gender, @children)
	@clients[@name].display_properties
end


def animal_maker
	puts "Let's make an animal! Choose a name"
	@animal_name = gets.chomp.capitalize
	puts "What sort of animal is #{@animal_name}?"
	@species = gets.chomp

	@animals.store "#{@animal_name}", Animal.new(@animal_name, @species)
	@animals[@animal_name].introduce
end


def visit_shelter

	def choose_client
		puts "Here's a list of our clientele:"
		puts "#{show_clients}"
		puts "Which client would you like to select?"
		@current_client = @clients[gets.capitalize.chomp]
		# binding.pry
	end

	def choose_animal
		puts "Heres a list of the animals currently in the shelter"
		puts "#{show_animals}"
		puts "Which animal does #{@current_client.name} want to adopt?"
		@current_animal = @animals[gets.capitalize.chomp]
	end

	choose_client
	choose_animal

	#move animal object from shelter to owner's possession
	@clients[@current_client.name].adopt_animal(@current_animal)
	@animals.delete(@current_animal.name)
	
	puts "All done! #{@current_client.display_properties}"

end

def animal_abandonment
	puts "Return an animal? You're a monster! Which file should I pull up?"
	puts "#{show_clients}"
	@current_client = @clients[gets.capitalize.chomp]

	puts "Which animal are you returning?"
	puts "#{@current_client.pets.each {|name| name.to_s}}"

	@current_animal = @current_client.pets.select
end


while main_program == "run"
	
	menu_options = [:client_maker, :animal_maker, :visit_shelter, :animal_abandonment, :quit]
	
	puts "Please choose an option between 1-6:
	1 - Create a client 
	2 - Create an animal
	3 - Visit the shelter
	4 - Return an animal
	5 - Quit
	"

	user_option = gets.chomp.to_i
	game_state = menu_options[user_option-1]
	
	case game_state

		when :client_maker		
			client_maker

		when :animal_maker
			animal_maker

		when :visit_shelter
			visit_shelter

		when :animal_abandonment
			animal_abandonment

		when :quit
			main_program = "quit"

	end

end

puts "Thanks for visiting!"

