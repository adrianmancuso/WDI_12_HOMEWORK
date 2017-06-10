var wordList = ['basket', 'reject', 'library', 'depend', 'creator', 'juggle', 
'explode', 'hour', 'fowl', 'nervous', 'green', 'finger', 'wave', 'omniscient', 
'boy', 'receive', 'pack', 'precious', 'public', 'jog', 'call', 'tongue', 
'stop', 'massive', 'dance', 'perfect', 'poison', 'pest', 'hose', 'sick', 
'addition', 'farm', 'sparkling', 'handsome', 'beneficial', 'fanatical', 
'pickle', 'understood', 'low', 'escape', 'hate', 'flight', 'car', 'whimsical', 
'sister', 'clear']; 
var playingField = document.querySelector('h1');
var keyboardInput = document.querySelector('input');
var emptyField = [];
var playerGuess = null;
var wordInPlay = null;

var randomIndex = function () {
	return Math.floor(Math.random() * wordList.length);
}
//chose a random word from array
var randomWord = function () {
	var num = randomIndex();
	//turn string to array , create word length array of underscores
	wordInPlay = wordList[num].toLowerCase().split('');
}


var clearField = function() {
	emptyField = [];
	playingField.innerHTML = "";
}

var createField = function () {
	clearField();
	for (var i = 0; i < wordInPlay.length; i++){
		emptyField.push("_");	
	}
	playingField.innerHTML = emptyField.join(' ');
}
//create userinput and store in variable 
keyboardInput.addEventListener('keydown', function(event){checkGuess(event.key);});



var checkGuess = function (keyPressed) {
	for (var i = 0; i < wordInPlay.length; i++){
		if (wordInPlay[i] === keyPressed){
			emptyField.splice(i, 1, wordInPlay[i]);
			console.log(emptyField);
		} else {
			emptyField.push("_");
		}
	}
	clearField();
	playingField.innerHTML = emptyField.join(' ');
	// check against word in play array
	// print to emptyField
	//compare field state before and after full loop
}

//check guess against array


//CONDITIONAL: if found replace underscore with letter
//if incorrect print letter to top left

//make CNTRL + ENTER = reset?
// Terminal theme?

