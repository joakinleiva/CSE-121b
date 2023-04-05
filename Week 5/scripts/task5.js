let date = new Date();


let dayOfWeek = date.getDay();

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week (hint: getDay())
let message1 = "";

// Step 4: Declare a variable to hold a message that will be displayed
if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    message1 = "Hang in there!";
} else {
    message1 = "Woohoo! It is the weekend!";
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let message2 = "";

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dayOfWeek) {
    case 0:
    message2 = "Sunday";
    break;
    case 1:
    message2 = "Monday";
    break;
    case 2:
    message2 = "Tuesday";
    break;
    case 3:
    message2 = "Wednesday";
    break;
    case 4:
    message2 = "Thursday";
    break;
    case 5:
    message2 = "Friday";
    break;
    case 6:
    message2 = "Saturday";
    break;
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.getElementById("message1").innerHTML = message1;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.getElementById("message2").innerHTML = message2;

/* FETCH */

// Step 1: Declare a global empty array variable to store a list of temples
let templeList = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
function output(temples) {
  for (let i = 0; i < temples.length; i++) {
    const temple = temples[i];
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;
    const h4a = document.createElement("h4");
    h4a.textContent = temple.location;
    const h4b = document.createElement("h4");
    h4b.textContent = temple.dedicated;
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    article.appendChild(h3);
    article.appendChild(h4a);
    article.appendChild(h4b);
    article.appendChild(img);
    document.getElementById("temples").appendChild(article);
  }
}
/* FETCH */
// Step 3: Create another function called getTemples. Make it an async function.
async function getTemples() {
    // Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'.
    const response = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');
    // Create a variable to hold the response from your fetch.
    // You should have the program wait on this line until it finishes.
    
    // Step 5: Convert your fetch response into a Javascript object (hint: .json()).
    const templeList = await response.json();
    // Store this in the templeList variable you declared earlier (Step 1).
    // Make sure the execution of the code waits here as well until it finishes.
  
    // Step 6: Finally, call the output function and pass it the list of temples.
    output(templeList);
  }
  
  // Call the getTemples function to load the temple data
  getTemples();
  
  // Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
  function reset() {
    const templeList = document.getElementById('temples');
    templeList.innerHTML = '';
  }
  
  // Step 8: Declare a function named sortBy that does the following:
  function sortBy() {
    // - Calls the reset function
    reset();
    
    // - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
    const sortValue = document.getElementById('sortBy').value;
    templeList.sort((a, b) => (a[sortValue] > b[sortValue]) ? 1 : -1);
    
    // - Calls the output function passing in the sorted list of temples
    output(templeList);
}
// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
const sortSelect = document.getElementById('sortBy');
sortSelect.addEventListener('change', sortBy);
  
