require 'pry'
str = 'reverse this string'
arr = str.split(' ')
reversed = arr.map do |element|
  element.reverse
end
reversed = arr.map(&:reverse)
reversed.join(' ')
binding.pry
