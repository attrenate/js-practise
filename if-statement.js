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
