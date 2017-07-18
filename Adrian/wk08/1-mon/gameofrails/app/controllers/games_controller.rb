class GamesController < ApplicationController

	def index
		
	end

	def show
		

	end


	def magic_8_ball

		possible_answers = [ "It is certain",
		 "It is decidedly so",
		 "Without a doubt",
		 "Yes definitely",
		 "You may rely on it",
		 "As I see it, yes",
		 "Most likely",
		 "Outlook good",
		 "Yes",
		 "Signs point to yes",
		 "Reply hazy try again",
		 "Ask again later",
		 "Better not tell you now",
		 "Cannot predict now",
		 "Concentrate and ask again",
		 "Don't count on it",
		 "My reply is no",
		 "My sources say no",
		 "Outlook not so good",
		 "Very doubtful"]	
	 
	 num = rand(possible_answers.length)
	 result = possible_answers[num]
	 @answer = "#{question}? Hmm...#{result}!"
	 @test = "TESTSTSTS"
	end


	def secret_number guess
		secret = rand(10)
		if secret == guess
			return "That's right! Good guess"
		end	
		return "Nope, you're an idiot"	
	end


	def rock_scissors_paper 
	
		outcomes = ['rock', 'scissors', 'paper']
		num = rand(outcome.length)
		result = outcomes[num]

	end


end
