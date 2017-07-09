var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
var body = document.getElementsByTagName('body')[0];
var selectBox = document.getElementById('city-type');

for (var i = cities.length - 1; i >= 0; i--) {
	var option = document.createElement("OPTION");
	option.textContent = cities[i];
	selectBox.appendChild(option);
};

var changeBackground = function() {
	var choice = event.target.value;
	if (choice === "SYD") {
		body.className = 'sydney';
	} else if (choice === "ATX") {
		body.className = 'austin';
	} else {
		body.className = choice.toLowerCase();
	}
};

selectBox.addEventListener('change', changeBackground);