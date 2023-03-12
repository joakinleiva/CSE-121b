/* Lesson 3 */

/* FUNCTIONS */

//ADD
function add(number1, number2){
    return number1 + number2;
}
//SUBTRACT
function subtract(number1, number2){
    return number1 - number2;
}
//MULTIPLY
function multiply(number1, number2){
    return number1 * number2;
}
//DIVIDE
function divide(number1, number2){
    return number1 / number2;
}

function addNumbers(){
    let addend1 = Number(document.querySelector("#addend1").value);
    let addend2 = Number(document.querySelector("#addend2").value);
    let adding = add(addend1, addend2);
    document.getElementById("sum").value = adding;
}

let buttonAdd = document.querySelector("#addNumbers");
buttonAdd.addEventListener('click', addNumbers);

// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtractNumbers(){
    let minuend = Number(document.querySelector("#minuend").value);
    let subtrahend = Number(document.querySelector("#subtrahend").value);
    let subtracting = subtract(minuend, subtrahend);
    document.getElementById("difference").value = subtracting;
}

let buttonSubstract = document.querySelector("#subtractNumbers");
buttonSubstract.addEventListener('click', subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
function multiplyNumbers(){
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);
    let multiplying = multiply(factor1, factor2);
    document.getElementById("product").value = multiplying;
}

let buttonMultiply = document.querySelector("#multiplyNumbers");
buttonMultiply.addEventListener('click', multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divideNumbers(){
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    let dividing = divide(dividend, divisor);
    document.getElementById("quotient").value = dividing;
}

let buttonDivide = document.querySelector("#divideNumbers");
buttonDivide.addEventListener('click', divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let date = new Date();

// Step 2: Declare a variable to hold the current year
let year;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
year = date.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById("year").innerHTML = year;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let myArrayTwentyFive = [];
[...Array(25).keys()].forEach((number) => {
    myArrayTwentyFive.push(number + 1);
});

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").innerHTML = myArrayTwentyFive;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let oddNumbers = myArrayTwentyFive.filter(num => num % 2 !== 0);
document.getElementById("odds").innerHTML = oddNumbers;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
let evenNumbers = myArrayTwentyFive.filter(num => num % 2 === 0);
document.getElementById("evens").innerHTML = evenNumbers;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
let startingValue = 0;
let firstSum = myArrayTwentyFive.reduce((accumulator, currentValue) => accumulator + currentValue,
startingValue
);

document.getElementById("sumOfArray").innerHTML =  firstSum;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
let multiplied = myArrayTwentyFive.map(num => num * 2);

document.getElementById("multiplied").innerHTML = multiplied;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
let sumOfMultiplied = myArrayTwentyFive.map(num => num * 2).reduce((accumulator, currentValue) => accumulator + currentValue);
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;