"use strict";
var wordList = ['basket', 'reject', 'library', 'depend', 'creator', 'juggle', 
'explode', 'hour', 'fowl', 'nervous', 'green', 'finger', 'wave', 'omniscient', 
'boy', 'receive', 'pack', 'precious', 'public', 'jog', 'call', 'tongue', 
'stop', 'massive', 'dance', 'perfect', 'poison', 'pest', 'hose', 'sick', 
'addition', 'farm', 'sparkling', 'handsome', 'beneficial', 'fanatical', 
'pickle', 'understood', 'low', 'escape', 'hate', 'flight', 'car', 'whimsical', 
'sister', 'clear']; 
var playingField = document.querySelector('h1');
var keyboardInput = document.querySelector('input');
var newBtn = document.querySelector('#newGame');
var newPlusBtn = document.querySelector('#newGamePlus');
var guessesRemaining = document.querySelector('.counter');
var emptyField = [];
var wordInPlay = null;
var incorrectField = document.querySelector('h3');
var incorrectGuessCount = 0;
var maxGuesses = 12;

var randomIndex = function () {
	return Math.floor(Math.random() * wordList.length);
};
//chose a random word from array
var randomWord = function () {
	var num = randomIndex();
	//turn string to array 
	wordInPlay = wordList[num].toLowerCase().split('');
};


var resetField = function() {
	emptyField = [];
	playingField.innerHTML = "";
	incorrectGuessCount = 0;
	incorrectField.innerHTML = "";
	keyboardInput.style.display='block';
};

var createField = function () {
	resetField();
	for (var i = 0; i < wordInPlay.length; i++){
		emptyField.push("_");	
	}
	playingField.innerHTML = emptyField.join(' ');
};
//return user input from keyboard and pass to checkGuess function
keyboardInput.addEventListener('keydown', function(event){checkGuess(event.key);});

//end game logic. called at the end of checkGuess
var endGame = function () {
	if (incorrectGuessCount >= maxGuesses) {
	resetField();
	playingField.innerHTML = "GAME OVER";
	keyboardInput.style.display='none';
	} else if (!(emptyField.includes('_'))) {
	resetField();
	playingField.innerHTML = "YOU WIN";
	keyboardInput.style.display='none';
	}
};

var checkGuess = function (keyPressed) {
	keyboardInput.innerHTML = "";
	for (var i = 0; i < wordInPlay.length; i++){
		if (wordInPlay[i] === keyPressed){
			emptyField.splice(i, 1, wordInPlay[i]);
		}
	}
	playingField.innerHTML = "";
	playingField.innerHTML = emptyField.join(' ');
	//incorrect guesses
	if (!wordInPlay.includes(keyPressed)) {
			incorrectField.innerHTML += keyPressed;
			incorrectGuessCount++;
		}
	endGame();
	keyboardInput.value = "";
	guessesRemaining.innerHTML = (maxGuesses - incorrectGuessCount);
};

var newGame = function () {
randomWord();
createField();
};

//as per 90s squaresoft and konami games, makes game more difficult
var newGamePlus = function () {
	if (maxGuesses > 2) {
		maxGuesses-= 2;
	}
	newGame ();
};

newBtn.addEventListener('click', newGame);
newPlusBtn.addEventListener('click', newGamePlus);
//initial game creation
newGame();


//CONDITIONAL: if found replace underscore with letter
//if incorrect print letter to top left

//make CNTRL + ENTER = reset?
// Terminal theme?

