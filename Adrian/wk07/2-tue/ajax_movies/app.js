var $main = $('main');
var $input = $('input');
var $btn = $('button');


$btn.on('click', function(event) { 

	event.preventDefault();
	$main.empty();

	var settings = {
		url: "http://omdbapi.com/",
		data: { 
			s: $input.val(), 
			apikey: '2f6435d9'
		}
	};

	$.ajax(settings).done(function(response) {
		response.Search.forEach(function(movie){
			$searchResult = $('<h2/>');
			$searchResult.text(movie.Title);
			$newLink = $('<a/>');
			$newLink.attr("href", "http://www.imdb.com/title/" + movie.imdbID);
			$newLink.attr("target", "_blank");
			$newLink.append($searchResult);
			$main.append($newLink);
		});
	});
});
