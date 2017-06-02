var alamein = {
    lineName: "Alamein",
    stations: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"]
};

var sandringham = {
    lineName: "Sandringham",
    stations: ["Southern Cross", "Richmond", "South Yarra", "Prahan", "Windsor"]
};

var glenWaverly = {
    lineName: "Glen Waverly",
    stations: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"]
};

var trainLines = [alamein, sandringham, glenWaverly];

var makeRoute = function(lineIndex, indexOne, indexTwo) {
    //checking
    if (indexOne > indexTwo) {
        var temp = indexOne;
        indexOne = indexTwo;
        indexTwo = temp;

        return lineIndex.stations.slice(indexOne, indexTwo + 1).reverse();
    } else {
        return lineIndex.stations.slice(indexOne, indexTwo + 1);
    }
}

var stringify = function() {
    for (var arg = 0; arg < arguments.length; arg++) {
        return (arguments[arg]).join(" ~~~~> ");
    }
}

var checkLines = function(origin, destination) {
    for (var j = 0; j < 3; j++) {
        foundMatch = trainLines[j].stations.includes(destination);
        if (foundMatch) {
            var destinationLine = (trainLines[j]);
        }
        foundMatch = trainLines[j].stations.includes(origin);
        if (foundMatch) {
            var originLine = (trainLines[j]);
        }
    }
    if (originLine === destinationLine) {
        var originIndex = originLine.stations.indexOf(origin);
        var destinationIndex = originLine.stations.indexOf(destination);
        var route = makeRoute(originLine, originIndex, destinationIndex);

        console.log("Origin: " + origin);
        console.log("Destination: " + destination);
        console.log(stringify(route));
        console.log((route.length - 1) + " stops total");

    } else {
        var firstStationIndex = originLine.stations.indexOf(origin);
        var secondStaionIndex = originLine.stations.indexOf("Richmond");
        var initialRoute = makeRoute(originLine, firstStationIndex, secondStaionIndex);
        var thirdStationIndex = destinationLine.stations.indexOf("Richmond");
        var finalStationIndex = destinationLine.stations.indexOf(destination);
        var finalRoute = makeRoute(destinationLine, thirdStationIndex, finalStationIndex);
        finalRoute.shift();

        console.log("Origin: " + origin);
        console.log("Destination: " + destination);
        console.log(initialRoute);
        console.log(finalRoute);
        console.log(stringify(initialRoute.concat(finalRoute)));
        console.log((initialRoute.length + finalRoute.length - 1) + " stops total");
    }
}





// //function for basic journey and route
// var basicJourney = function(origin, destination) {
// 	var originIndex = trainLines[0].stations.indexOf(origin);
// 	var destinationIndex = trainLines[0].stations.indexOf(destination);
// 	var route = trainLines[0].stations.slice(originIndex, destinationIndex +1).join("---->");
// 	console.log(route);
// }
// basicJourney("East Richmond", "Hawthorn");

// //function to check for matches across trainLines
// //need to set object

// var checkLines = function (origin, destination){
// 	for (var j = 0; j < 3; j++){
// 		foundMatch = trainLines[j].stations.includes(destination);
// 		if (foundMatch){
// 			var destinationLine = (trainLines[j]);
// 		}
// 		foundMatch = trainLines[j].stations.includes(origin);
// 		if (foundMatch){
// 			var originLine = (trainLines[j]);
// 		}
// 	}
// 	if (originLine === destinationLine){
// 		var originIndex = originLine.stations.indexOf(origin);
// 		var destinationIndex = originLine.stations.indexOf(destination);
// 		var route = originLine.stations.slice(originIndex, destinationIndex +1).join("---->");
// 		console.log(route);

// 	} else
// 	{
// 		//create TWO routes and join them - might need to create more variables? 
// 		//maybe create a function
// 		var firstStationIndex = originLine.stations.indexOf(origin);
// 		var secondStaionIndex = originLine.stations.indexOf("Richmond");
// 		var initialRoute = originLine.stations.slice(firstStationIndex, secondStaionIndex).join("---->");
// 		var thirdStationIndex = destinationLine.stations.indexOf("Richmond");
// 		var finalStationIndex = destinationLine.stations.indexOf(destination);
// 		var finalRoute = destinationLine.stations.slice(thirdStationIndex, finalStationIndex + 1).join("---->");

// 		console.log("Origin: " + origin);
// 		console.log("Destination: " + destination);

// 		console.log(initialRoute + " CHANGE TRAIN" + finalRoute);
// 	}


// }

//attempt to refactor
