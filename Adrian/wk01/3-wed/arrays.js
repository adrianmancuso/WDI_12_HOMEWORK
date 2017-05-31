//days of the week

var days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log("days of the week are: " + days_of_the_week);
days_of_the_week.unshift(days_of_the_week.pop());
console.log("christian days of the week are: " + days_of_the_week);

var weekdays = days_of_the_week.slice(1, 6);
console.log("sober days of the week are: " + weekdays);
var weekends = days_of_the_week.splice(1, 5);
console.log("boozy days of the week are: " + days_of_the_week);

//alternate method would be to shift and pop the weekdays

weekdays.sort();
console.log("sober days in alphabetical order: " + weekdays);