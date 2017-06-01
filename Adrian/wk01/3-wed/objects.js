//The recipe card
var aDeliciousSpaghettiBolognese = {
	title: 'Swaghetti Yolonese',
	servings: 4,
	ingredients: ['onion', 'garlic', 'spaghetti', 'tomato', 'olive oil', 'oregano', 'beef stock', 'ground beef']
}


console.log("Baddabing! So ya wanna cook a delicious " + aDeliciousSpaghettiBolognese.title + "?");
console.log("Ya gotta know this serves " + aDeliciousSpaghettiBolognese.servings + " delicious dinners. Fuggettaboutit!");
console.log("Gabbagool! You gotta buy: " + aDeliciousSpaghettiBolognese.ingredients.join('\n'));



//the reading list
var readingList = [{
	bookAuthor: 'Marijn Haverbeke', 
	bookName: 'Eloquent Javascript', 
	alreadyRead: false
},

	{
		bookAuthor: 'Mooki Gottabeak', 
		bookName: 'Javveling Arbascript', 
		alreadyRead: false
	},

	{
		bookAuthor: 'Marcin Honkleberry', 
		bookName: 'Rambling Navascript', 
		alreadyRead: true
	}];

for (var i = 0; i < readingList.length; i++){
	//var currentBook = readingList[i];  -- optional for readability
	if (readingList[i].alreadyRead){
		console.log("You already read " + readingList[i].bookName + " by " + readingList[i].bookAuthor + ".");
	} else{
		console.log("You still need to read " + readingList[i].bookName + " by " + readingList[i].bookAuthor + ".");

	}
}

//The local movie database
var playtime = {
	director: 'Jaques Tati',
	title: 'Playtime',
	duration: 310,
	actors: ['Jacques Tati', 'Barbara Dennek', 'Rita Maiden']
}

var deadRingers = {
	director: 'David Cronenberg',
	title: 'Dead Ringers',
	duration: 260,
	actors: ['Jeremy Irons', 'Norman Snider', 'Genevieve Bujold', 'Heidi von Palleske']
}

var theThing = {
	director: 'John Carpenter',
	title: 'The Thing',
	duration: 124,
	actors: ['Kurt Russell', 'Wilford Brimley', 'T.K Carter', 'Charles Hallahan']
}

function describeMovie (movie) {
	return movie.title + ' directed by ' + movie.director + ' lasts for ' + movie.duration + ' minutes and stars ' + movie.actors
}


console.log(describeMovie(theThing));
console.log(describeMovie(deadRingers));
console.log(describeMovie(playtime));

//changed function name to be more descriptive