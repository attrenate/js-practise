// Hours exercise variables
let morning = 12;
let noon = 17;
let evening = 23;
let hour = parseInt(prompt('Choose an hour (0-23): '), 10);

// Amusement park exercise variables
let age = parseInt(prompt('How old are ya?: '), 10);
const discount = 6;

// Hours exercise
if (hour >= 0 && hour < morning) {
    console.log('Good morning');
} else if (hour < noon) {
    console.log('Good afternoon');
} else if (hour <= evening) {
    console.log('Good evening');
} else {
    console.log('Invalid hour'); 
}

// Amusement park
if (age > discount) {
    console.log('No discount');
} else {
    console.log('You get the discount');
}

// coin-flip game
let randomNumber = Math.random();
let result = '';


if(randomNumber >= 0.5){
    result = 'head';
}else{
    result = 'tails';
}

// Coin flip game - guessing the result
let guess = prompt('Guess the result (head/tails): ').toLowerCase(); // 

// Generate a random coin flip result
let randomNumber1 = Math.random();
let result1 = randomNumber1 >= 0.5 ? 'head' : 'tails';

console.log(`Coin flip result: ${result1}`);

// Check if the guess is correct
if (guess === result1) {
    console.log('You win!');
} else {
    console.log('You lose!');
}
