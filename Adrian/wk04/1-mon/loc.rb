require "fileutils"
line_count = 0

File.open(ARGV[0]) do |file|
	file.each_line {line_count+=1}
	puts "line count: #{line_count} lines"
end


# alt File.readlines(ARGV[0]).length
# read a file i pass in

# a function to read a file

# use program to find amout of lines

# print to terminal eg 17 lines