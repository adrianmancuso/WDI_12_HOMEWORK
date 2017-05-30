//The age calculator
var currentYear = prompt("What is the current year?");
var birthYear = prompt("what is your birth year?");
var age = currentYear - birthYear;
console.log("You are either " + (age-1) + " or " + age);


// The Lifetime Supply Calculator
var currentAge = prompt("What is your current age?");
var maximumAge = prompt("...and how old will you be before you die?");
var dailyKitKitKonsumption = prompt("How many Kit-Kats do you eat per day, fatty?")
var remainingYears = maximumAge - currentAge;
console.log("You will need " + ((dailyKitKitKonsumption*365)*remainingYears) + " Kit-Kats to last you to the ripe old age of " + maximumAge)


// #The Geometrizer
var radius = prompt("Please enter the circle radius:");
var circumference = 2*(radius * 3.14159);
var area = (3.14159 * (radius*radius));
console.log("The circumference is " + circumference);
console.log("The area is " + area);


//The even / odd reporter
for (var i = 0; i <=20; i ++) {
	if (i % 2 === 0) {
		console.log(i + " is even");
	} else {
		console.log(i + " is odd");
	}
}

//Multiplication Tables
for (var mult = 0; mult <=10; mult ++){	
	console.log(mult + " * 9 = " + (9*mult ));
}

//bonus question
for (var multa = 1; multa <=10; multa ++){
	for (var multb = 1; multb <=10; multb ++){
	console.log(multa + " * " + multb + " = " + (multb*multa ));
}
}

//Your top choices
//note: I actually have no opinion of any of these presidents...
//I didn't even know that Italy had a president
var topItalianPresidents = ["Carlo Azeglio Ciampi", "Oscar Luigi Scalfaro", "Sandro Pertini", "Pietro Grasso", "Toppo Giggio", "Papa Guiseppe"];
for (var i = 0; i < topItalianPresidents.length; i++){
	if (i+1 === 1) {
		suffix = "st";	
	} else if (i+1 === 2){
		suffix = "nd";
	} else if (i+1 === 3) {
		suffix = "rd";	
	} else {
		suffix = "th";
}
	console.log("My " + (i+1) + suffix + " Italian President is " + topItalianPresidents[i]);
}

//else if work
var year = prompt("Pick a year!");
var currentDate = new Date();
if (year == currentDate.getFullYear()) {
	console.log("I'm in the present!");
	} else if (year < currentDate){
		console.log("Whoa! A blast from the past!");
	}	else{
		console.log("Greetings from the future!");
	}
