puts "Please choose from the following:\nadd\nsub\nmult\ndiv\nexp\nsq_root"
operation = gets.chomp
puts "first number:"
num1 = gets.chomp.to_f
puts "second number:"
num2 = gets.chomp.to_f

# basic functionality
def add num1, num2
	puts "adding #{num1} and #{num2} gives #{num1 + num2}"
end

def sub num1, num2
	puts "subtracting #{num1} and #{num2} gives #{num1 - num2}"
end

def mult num1, num2
	puts "multiplying #{num1} and #{num2} gives #{num1 * num2}"
end

def div num1, num2
	puts "dividing #{num1} by #{num2} gives #{(num1 / num2).round(2)}"
end

# advanced calculator functionality 
def exp num1, num2
	puts "raising #{num1} to the power of #{num2} gives #{num1**num2}"
end

def sq_root num1, num2
	puts "the square root of #{num1} is #{Math.sqrt(num1).round(2)}"
	puts "the square root of #{num2} is #{Math.sqrt(num2).round(2)}"
end


send operation, num1, num2
