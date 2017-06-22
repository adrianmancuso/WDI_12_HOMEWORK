require 'pry'
require_relative 'animal_shelter.rb'
require_relative 'animals.rb'
require_relative 'clients.rb'

puts "Welcome to HappiTails!"

main_program = "run"

while main_program == "run"
	
	menu_options = [:client_maker, :animal_maker, :check_clients, :check_animals, :animal_adoption, :animal_abandonment, :quit]
	puts "Please choose an option between 1-6:
	1 - Create a client 
	2 - Create an animal
	3 - Check current client list
	4 - Check current animal listings
	5 - Adopt an animal
	6 - Return an animal
	7 - Quit
	"

	user_option = gets.chomp.to_i
	game_state = menu_options[user_option-1]
	
	case game_state

		when :client_maker		
			puts "Let's make some clients. Choose a name"
			@name = gets.chomp
			puts "Is #{@name} male or female?"
			@gender = gets.chomp
			puts "And how many children does #{@name} have?"
			@children = gets.to_i

			@clients.store "#{@name}", Client.new(@name, @gender, @children)
			@clients[@name].introduce

		when :animal_maker
			puts "Let's make an animal! Choose a name"
			@animal_name = gets.chomp
			puts "What sort of animal is #{@animal_name}?"
			@species = gets.chomp

			@animals.store "#{@animal_name}", Animal.new(@animal_name, @species)
			@animals[@animal_name].introduce


		when :check_clients
			puts "#{show_clients}"
		
		when :check_animals
			puts "#{show_animals}"

		when :animal_adoption
			puts "This feature is not available yet :("

		when :animal_abandonment
			puts "This feature is not available yet :(
			Plus, it's really mean and you're a monster."

		when :quit
			main_program = "quit"
	
	end

end

puts "Thanks for visiting!"

