console.log(typeof true);
console.log(typeof 'false');
console.log(3 < 5);
console.log(5 === '5.00');
console.log(5 == '5.00');
console.log(3 > 5 - 5);
let canDrive = 17;

// practising if statements
if(false){
    console.log('hello');
}else{
    console.log('else');
}
if(canDrive >= 14){
    console.log('You can drive');
} else {
    console.log('You cannot drive');
} 
if(canDrive >= 19){
    console.log('You can drive');
} else if(canDrive >= 16) {
    console.log('almost there!');
} 

// logical operators
// ||-means 'or'; &&-means 'and' and lastly !-means 'not'.
console.log(true && true);
console.log(!true);
console.log(true || false);


// rock paper sciscors game !!!
// we can also create scopes, which are only ran and used in one function or if.
// var doesn't follow scope rule, that is the very reason why we don't use it no more.
const computerMove = ''; 
let result;
const randomNumber = Math.random();


// sum othe thing ig
const currency = 'EUR' || 'USD';
console.log(currency);


// practisising if statements
let morning = 12;
let noon = 17;
let evening = 23;
let hour = parseInt(prompt('Choose an hour: '), 10);



if (hour < morning) {
    console.log('Good morning');
} else if (hour < noon) {
    console.log('Good afternoon');
} else if (hour <= evening) {
    console.log('Good evening');
} else {
    console.log('Invalid hour'); 
}

