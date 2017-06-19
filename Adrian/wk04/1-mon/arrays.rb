days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
puts "1. Create an array of the days of the week"
puts days_of_the_week

day_to_move = days_of_the_week.pop
days_of_the_week.unshift(day_to_move)
puts "2. My calender says the first day is Sunday..."
puts days_of_the_week

weekdays = days_of_the_week[1..5]
weekends = []
weekends.push(days_of_the_week.first).push(days_of_the_week.last)
separated_array = [weekdays, weekends]
puts "3. Create a new array of the days of the week"
puts separated_array

separated_array.shift
puts "4. Remove either the weekdays or the weekends"
puts separated_array

 # no point sorting just weekends
puts "5. Sort the days alphabetically"
puts days_of_the_week.sort