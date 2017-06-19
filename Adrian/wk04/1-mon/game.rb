puts "Pick a high number"
max_limit = gets

random_number = rand(max_limit.to_i) #technically full function is Random.rand

puts "Ok I'm thinking of a number between 0 and " + max_limit
puts "Now try and guess the number!"

user_guess = gets.to_i
while user_guess != random_number
	if user_guess > random_number
		puts "Too high! Try guessing a lower number"
	else user_guess < random_number
		puts "Too low, try guessing a higher number"
	end
	user_guess = gets.to_i
end

puts user_guess.to_s + "! That's right, you got it!"