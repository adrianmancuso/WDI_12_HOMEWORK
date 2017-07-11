(1.) Write the correct javascript to select the second h1 element:
secondElement = document.querySelectorAll('h1')[1];


(2.) How would you change the contents of the element to be 'Friend'?
secondElement.textContent = "Friend";


<html>
  <div>
    <h1>Hello</h1>
  </div>
  
  <ul>
    <h1>Goodbye<h1>
  </ul>
</html>
(3.) How would you add an event listener to the button element inside the div, so that when it is clicked the background colour of the div changes to red?

btn = document.querySelector('button');
btn.addEventListener('click', function(event) {event.target.closest('div').style.backgroundColor = 'red';});

<html>
  <div>
    <button>Click me!</button>
  </div>
  
  <button>Dont click me</button>
</html>
(4.) Store the contents of the input box element with id 'favCol' into a variable called 'favouriteColor'.

favouriteColor = document.querySelector('#favCol').value

<html>
  <input type="text" id="favCol"/>
  <input type="text" id="leastFavCol"/>
  <input type="text" id="favFood"/>
</html>
(5.) Append a paragraph tag to the div with class 'my-articles'.

newParagraph = document.createElement('p');
targetDiv = document.querySelector('.my-articles');
targetDiv.appendChild(newParagraph);

<html>
  <body>
  <input type="text" id="search"/>
  
  <div class="my-articles">
    
  </div>
  </body>
  
</html>
(6.) Write the necessary code to figure out how many list items are in the ul tag below:

listItems = document.querySelectorAll('li');
listItems.length;


<html>
  <body>
  <input type="text" id="search"/>
  
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  </body>
  
</html>
(7.) Write the neccessary code so when the button is clicked a new list item with a random number is appended to the unordered list with the class 'lucky-numbers'

btn = document.querySelector('button');
ul = document.querySelector('.lucky-numbers');

var drawNumber = function() {
  newItem = document.createElement('li');
  num = Math.floor(Math.random()*100);
  newItem.innerText = num;
  ul.appendChild(newItem);
};

btn.addEventListener('click', drawNumber);


<html>
  <body>
    <button>draw number</button>
    <ul class="lucky-numbers">
      <li>7</li>
      <li>12</li>
      <li>45</li>
    </ul>
  </body>
  
</html>