require "pry"

puts ""
puts "Round 1"
def lengths array
	puts " #{array.map(&:length)}"
end

lengths ["hello", "is", "it", "me", "youre", "looking", "for"]
lengths ["ruby", "is", "confusing", "me", "right", "now", "wrongword"]

puts ""
puts "Round 2"
def transmogrifier num1, num2, num3
	trans_num = ((num1*num2)**num3)
	puts "#{trans_num}"
end

transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)

puts ""
puts "Round 3"
def toonify accent, sentence
	if accent == 'daffy' 
		puts "#{sentence.gsub(/s/, 'th')}"
	elsif accent == 'elmer'
		puts "#{sentence.gsub(/r/, 'w')}"
	elsif accent == 'road runner'
		puts "#{sentence.gsub(/./, 'Meep Meep! ')}"
	else
		puts "#{sentence}"
	end 
end

toonify 'daffy', 'youre a dispicable sausage sizzler'
toonify 'elmer', 'from here to there is a distance that i do not want to travel'
toonify 'road runner', 'hello'
toonify 'normal person', 'Hello, I am a normal person'

puts ""
puts "Round 4"
def wordReverse string
	# array = string.split
	# puts "#{array.reverse.join(" ")}"
	puts "#{string.split.reverse.join(' ')}"
end

wordReverse "Now I know what a TV dinner feels like"

puts ""
puts "Round 5"
def letterReverse string
	# array = string.split
	# array.each {|word| word.reverse!}
	# puts "#{array.join(" ")}"
	puts "#{string.split(' ').map(&:reverse).join(' ')}"
end

letterReverse("Now I know what a TV dinner feels like")
letterReverse("Put Hans back on the line")

puts ""
puts "Round 6 - Finish Him!"
def longest array
	longest_word = array.max_by(&:length)
	puts "#{longest_word}"
end

longest(["oh", "good", "grief"])
longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])
longest(["hello", "what", "peanut", "beanut"]) # always returns first instance of max length