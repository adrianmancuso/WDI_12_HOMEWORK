require_relative 'monkey.rb'
require 'pry'

monkey_house = []

monkey_one = Monkey.new('Reginald', 'Gorilla')
monkey_two = Monkey.new('Brian', 'Blue-Bum Mokey')
monkey_three = Monkey.new('Sausage', 'Sea Monkey')

monkey_one.eat('Sausage')
monkey_one.eat('Lasagna')
monkey_one.eat('a good sanga')

monkey_two.eat('a healthy salad')

monkey_three.eat('a full deck of ciggies')

puts "#{monkey_one.introduce}"
puts "#{monkey_two.introduce}"
puts "#{monkey_three.introduce}"


monkey_factory = "on"

while monkey_factory == "on"
	puts "Hey kid! Let's make some monkeys!"
	puts "What type of monkey do you want to make?"	
	user_species = gets.chomp
	puts "Good! Give this monkey a name!"
	user_name = gets.chomp
	monkey_house.push Monkey.new(user_name, user_species)
	puts "Ok let's feed #{monkey_house[-1].get_name}. What do they want to eat?"
	monkey_house[-1].eat gets.chomp
	puts "#{monkey_house[-1].introduce}"
	puts "OK boss, wanna make more monkeys or shut it down? (ON / OFF)"
	monkey_factory = gets.chomp
end
