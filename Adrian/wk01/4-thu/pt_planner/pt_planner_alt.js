var alamein = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];

var sandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahan", "Windsor"];

var glenWaverly = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];

var trainLines = [alamein, sandringham, glenWaverly];

//going from southern cross to prahan

//function to find index of station
var findIndex = function (stationName) {
	return sandringham.indexOf(stationName);
}

//returns route in a correctly formatted string
var stringify = function (array) {
		return array.join(" ---> ");
}

var plotJourney = function (start, end) {
	originIndex = findIndex(start);
	destinationIndex = findIndex(end);

	var allStops = [];

	//direction is found by comparing index points
	if (originIndex > destinationIndex){
		for (var i = originIndex; i >= destinationIndex; i--){
			allStops.push(sandringham[i]);
		}
	} else {
		for (var i = originIndex; i <= destinationIndex; i++) {
			allStops.push(sandringham[i]);
		}
	}
	
	console.log("Origin: " + start);
	console.log("Destination: " + end);
	console.log(stringify(allStops));
	console.log((allStops.length -1) + " stops total");

}

