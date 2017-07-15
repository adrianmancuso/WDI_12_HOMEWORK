var $input = $('input');
var $btn = $('button');
var offset = 0;

var get_results = function(){
		
		var settings = {
		url: "http://api.giphy.com/v1/gifs/search",
		data: {
			q: $input.val(),
			api_key: "1e875628917946fdad24e3fc53d93423",
			limit: 10,
			offset: offset
		}
	}

	jQuery.ajax(settings).done(function(giphy_response) {
		gifs = giphy_response.data;

		gifs.forEach(function(gif){
			
			var source   = $("#gif_search_results").html();
			var template = Handlebars.compile(source);
			var result = template({ url: gif.images.fixed_height.url });

			$('.search_result').append(result);
		});
	});
};

$btn.on('click', function(event) {

	$('.search_result').empty();
	event.preventDefault();
	get_results();

});

$(window).scroll(function() {
	if ($(document).height()<=$(window).scrollTop() + $(window).height()) {
		offset += 10;
		get_results();
	}
});