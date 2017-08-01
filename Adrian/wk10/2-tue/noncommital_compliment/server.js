var app = require('express')();
var bodyParser = require('body-parser');

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
	extended: true
}));

var complimentGen = ['You do not always come off as a terrible person', 
										'It is possible that somebody likes you', 
										'I have overheard others talk about you in a positive context', 
										'You try quite hard, which is admirable', 
										'You are not short', 
										'Your face in combination with your hair is very distinctive',
										'Your eyes are a good distance apart - not too close, not too wide'];

var colorGen = ['#E5A09C', 
								'#28737F', 
								'#3BADBF', 
								'#143A40', 
								'#47CFE5'];


const PORT = 7000;

app.set('views', './views');
app.set('view engine', 'ejs');

var generatePage = function(request, response, name) {
	var randomCompliment = complimentGen[(Math.floor(Math.random() * complimentGen.length))];
	var randomColor = colorGen[(Math.floor(Math.random() * colorGen.length))];
		response.render('index', {
		compliment: randomCompliment,
		color: randomColor,
		name: name
	});
};


app.get('/', function(req, res) {
	generatePage(req, res);
}); 


app.get('/*', function(req, res) {
	userName = req.url.substring(1, req.url.length);
	generatePage(req, res, userName);
});


app.post('/', function(request, response) {
	var str = request.body.compliment;
	complimentGen.push(str);
	generatePage(request, response);
});

app.listen(PORT, function() {
	console.log('listening on port ' + PORT);
});