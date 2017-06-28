require "pry"

class School

	def initialize
		@db = {}
	end

	def db
		puts @db
	end
	
	def add(student, grade) 
		if @db[grade] == nil
			@db[grade] = [].push(student)
		else
			@db[grade].push(student)
		end
	end

	def grade(num)
		@db[num]
	end

	def sort
		trans1 = @db.sort.to_h
		trans1.each {|key, value| value.sort!}
	end

end

binding.pry