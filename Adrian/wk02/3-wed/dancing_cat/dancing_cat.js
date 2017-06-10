var movePixels = 10;
var bear = document.querySelector('img');
var start = document.querySelector('#start');
var fast = document.querySelector('#fast');
var stop = document.querySelector('#stop');
var timerId;
var speed = 70;
var i = 0;

var startTime = function() {
	clearInterval(timerId);
	timerId = setInterval(bearWalk, speed);
}

var doubleSpeed = function() {
	movePixels += 2;
}

var flip = function() {
	bear.style.transitionDuration = "0.8s";
	i += 180;
	bear.style.webkitTransform = "rotateY(" + i + "deg)";
}

flip();
start.addEventListener('click', startTime);
stop.addEventListener('click', function() { clearInterval(timerId) });
fast.addEventListener('click', doubleSpeed);

var bearWalk = function() {
	var currentLeftPos = parseInt(bear.style.left);
	bear.style.left = (currentLeftPos + movePixels) + 'px';

	if (currentLeftPos > (window.innerWidth-bear.width)){
		flip();
		clearInterval(timerId);
		timerId = setInterval(moonWalk, speed);
	}
}

var moonWalk = function() {
	var currentRevPos = parseInt(bear.style.left);
	bear.style.left = (currentRevPos - movePixels) + 'px';

	if (currentRevPos ===)

	if (currentRevPos < 0) {
		flip();
		clearInterval(timerId);
		timerId = setInterval(bearWalk, speed);
	}
}





