// Variables
let computerMove = '';

// Functions
function function1() {
    console.log('hello');
    console.log(2 + 2);
}

function1();

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    console.log(computerMove);

    let result = '';

    if (computerMove === 'rock') {
        result = 'Tie.';
    } else if (computerMove === 'paper') {
        result = 'You lose.';
    } else {
        result = 'You win.';
    }

    alert(`You picked rock. Computer picked ${computerMove}. ${result}`);
    return computerMove;
}

// This function calculates tax
function calculateTax(x, taxPercent = 0.1) {
    console.log(x * taxPercent);
    console.log('Tax is: ' + x * taxPercent);
}

calculateTax(2000, 0.2);
calculateTax(5000, 0.25);

function playgame(playerMove) {
    const randomNumber = Math.random();
    let computerMove = '';
    let result = '';

    // Pick computer move
    if (randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    console.log(computerMove);

    // Determine result
    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';
        } else if (computerMove === 'paper') {
            result = 'You win.';
        } else {
            result = 'Tie.';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else {
            result = 'You lose.';
        }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else {
            result = 'You win.';
        }
    }

    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
    return computerMove;
}

 // This function converts Celsius to farenheits

 function convertToFarenheit(celsius){
  console.log(celsius * 9 / 5 + 32);
 }
 
 convertToFarenheit(50);  

 // This function converts Celsius to Fahrenheit.
function convertToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

console.log(convertToFahrenheit(50)); 


// This function convertes temprature both farenheit to celsius and other way around.
function convertTemperature(x, unit) {
  if (unit === 'fahrenheit') {
      return (x - 32) * 5 / 9; 
  } else if (unit === 'celsius') {
      return x * 9 / 5 + 32; 
  } else {
      return 'Invalid unit';
  }
}

console.log(convertTemperature(35, 'farenheit'));
console.log(convertTemperature(77, 'celsius'));

// This function convertes length form kms to miles and other way around.
function convertLength(x, from, to){
  if(from === 'kms' && to === 'miles'){
    return x / 1.6;
  } else if(from === 'miles' && to === 'kms'){
    return x * 1.6;
  } else if(from === 'miles' && to === 'miles'){
    return x * 1;
  } else {
    return x * 1;
  }
}

console.log(convertLength(50, 'kms', 'miles'));
console.log(convertLength(50, 'miles', 'kms'));
console.log(convertLength(50, 'kms', 'kms'));
console.log(convertLength(50, 'miles', 'miles'));

// updated version of the previous code (added feet).
function convertLength(x, from, to){
  if(from === 'kms' && to === 'miles'){
    return x / 1.6;
  } else if(from === 'miles' && to === 'kms'){
    return x * 1.6;
  } else if(from === 'miles' && to === 'miles'){
    return x * 1;
  } else if(from === 'miles' && to === 'feet') {
    return x * 5280;
  } else if(from === 'miles' && to === 'feet') {
    return x * 3281;
  }  else if(from === 'feet' && to === 'miles') {
    return x / 5280;
  } else if(from === 'feet' && to === 'kms') {
    return x / 3281;
  } else {
    return x * 1;
  }
}

console.log(convertLength(50, 'feet', 'miles'));
console.log(convertLength(50, 'miles', 'feet'));
console.log(convertLength(50, 'kms', 'feet'));
console.log(convertLength(50, 'feet', 'feet'));

// yet another updated version of the previous code(adding invalid unit this time).
function convertLength(x, from, to){
  if(from === 'kms' && to === 'miles'){
    return x / 1.6;
  } else if(from === 'miles' && to === 'kms'){
    return x * 1.6;
  } else if(from === 'miles' && to === 'miles'){
    return x * 1;
  } else if(from === 'miles' && to === 'feet') {
    return x * 5280;
  } else if(from === 'miles' && to === 'feet') {
    return x * 3281;
  }  else if(from === 'feet' && to === 'miles') {
    return x / 5280;
  } else if(from === 'feet' && to === 'kms') {
    return x / 3281;
  } else {
    return x * 1;
  }
  if(from === 'lbs' && to === 'lbs'){
    return "Invalid input: 'lbs'"
  }
}
console.log(convertLength(50, 'lbs', 'lbs'));