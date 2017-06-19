require "pry"

puts "enter a list:"
random_items = gets.chomp.split(',')
puts "enter a group size:"
size = gets.chomp.to_i
result = []

random_items.each_slice(size) {|arr| result.push(arr)}
puts result

# method one
# while random_items.length >= size do
# 		new_arr = [].push(random_items.slice!(0, 2))
# 		# binding.pry	
# end
# puts new_arr
	