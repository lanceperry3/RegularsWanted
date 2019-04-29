// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);

// Cleans up and capitalizes the names of the animals
/*function cleanAndCap (str){
  if(!str) return null
  let temp = str.trim()
  return temp[0].toUpperCase() + temp.substring(1)
}
*/

// Assigning the variables with values used in the story
const todaysSpecial = words.get('title');
const lineOne   = words.get('lineOne');
const lineTwo   = words.get('lineTwo');
const lineThree = words.get('lineThree');
const lineFour  = words.get('lineFour');
const lineFive  = words.get('lineFive');


// The string containing HTML and text which will populate the story.html page
const story = `<h3><span class="word" title="id: title">${todaysSpecial}</span></h3>
<p><span class="word" title="id: title">${todaysSpecial}</span></p>`;


// Grabbing the story element
const storyEl = document.getElementById('story');
// Populating the story element with the value of the story variable
storyEl.innerHTML = story;
