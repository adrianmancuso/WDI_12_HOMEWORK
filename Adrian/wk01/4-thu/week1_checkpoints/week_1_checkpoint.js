//JS variables

var captain = "Jack";

var phrase = "Oh " + captain + ", my " + captain + "!";

//JS conditionals

var souls = 3;
var lifeRafts = 2;

if (souls > lifeRafts) {
	console.log("SOS!");
}

//data structures - JS arrays
var weekend = ["Saturday"];
weekend.push("Sunday");
weekend.unshift("Friday");

var day = weekend[1];
weekend.shift();

//data structures - JS objects
var brain = {
	energyLevel: 10
}

var energy = brain.energyLevel;
brain.dream = "electric sheep";


// JS functions
var areaRectangle = function (x, y){
	return x * y;
}

var area = areaRectangle(3,4);
