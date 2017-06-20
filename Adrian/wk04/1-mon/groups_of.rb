require "pry"

puts "enter a list:"
random_items = gets.chomp.split(',')
puts "enter a group size:"
size = gets.chomp.to_i
result = []

random_items.shuffle!.each_slice(size) {|arr| result.push(arr)}
binding.pry
if result.last.length < result.first.length do
	x = result.pop
	result.last.concat(x)
end
end
puts "hello this is the #{result}"

# method one
# while random_items.length >= size do
# 		new_arr = [].push(random_items.shuffle!.slice!(0, 2))
# 		# binding.pry	
# end
# puts new_arr
	