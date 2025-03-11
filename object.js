// In objects we can store sum values.
const product = {
    name: 'socks',
    price: 1090
};
console.log(product);
console.log(product.name);

product.name = 'cotton socks';

console.log(product.name);

product.newProduct = 'cjnajnc';
console.log(product.newProduct);
// we can delete objects
 delete product.newProduct1;
console.log(product.newProduct1);

// brocket notation
let product2 = {
    name: 'vcbhsc',
    price: 113873
};


console.log(product2['name']);
// JSON system
console.log(JSON.stringify(product2));

// we can also use nested objects
const person = {
    name: 'John Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        postalCode: '10001'
    },
    contact: {
        email: 'john.doe@example.com',
        phone: '123-456-7890'
    }
};

console.log(person.name); 
console.log(person.address.city); 
console.log(person.contact.email); 



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

let score = {
    wins: 0,
    losses: 0,
    ties: 0
};
console.log(localStorage.getItem('message'));

 score = JSON.parse(localStorage.getItem('score'));
// score === null is the same as !score.
 if(score === null){
    score = {
        wins: 0,
        losses: 0,
        ties: 0 
    };
 } 

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
     if(result === 'You win.'){
        score.wins += 1;
     } else if(result === 'You lost'){
        score.losses += 1;
     } else if(result === 'Tie.'){
        score.ties += 1;
     }
     // localStorage only supports strings.
     localStorage.setItem('message', 'hello');
     localStorage.setItem('score', JSON.stringify(score));

    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
        wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`);
    return computerMove;
}
console.log('hello'.length);
console.log('hello'.toUpperCase());
// objects are references
// copy by reference.
const object1 = {
    message: 'hello'
};
const object2 = object1;

object1.message = 'good job';
console.log(object1);
console.log(object2);

// we can't compare object directly
//we're actually comparing references and not the objects themselves.

const object3 = {
    message: 'good job!'
};
console.log(object3 === object1);
console.log(object2 === object1);
