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
   
    if (indexOne > indexTwo) {
        var temp = indexOne;
        indexOne = indexTwo;
        indexTwo = temp;

        return lineIndex.stations.slice(indexOne, indexTwo + 1).reverse();
    } else {
        return lineIndex.stations.slice(indexOne, indexTwo + 1);
    }
}

//stringify looks overly complicated because I had originally planned
//for the function to take a variable number of arrays as an argument
//and to iterate through them and create a final string.
//this didn't work and I found an easier solution by using concat
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

        console.log(stringify(initialRoute.concat(finalRoute)));
        console.log((initialRoute.length + finalRoute.length - 1) + " stops total");
    }
}
