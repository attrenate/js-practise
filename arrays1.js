const myArray = [10, 20, 30];
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
myArray[0] = 99;
console.log(myArray);

[1, 'hello', true, {name: 'socks'}, [1, 2]]
console.log(typeof [1, 2]);
console.log(Array.isArray([1, 2]));

console.log(myArray.length);
myArray.push(100);
console.log(myArray);

myArray.splice(0, 1);
console.log(myArray);


// while loop
let i = 1;
while(i <= 5){
    console.log(i);
    i++;
}



// for loop (ფორ ვარი)
for(let i = 1; i <= 5; i++){
    console.log(i);
}

let randomNumber = 0;

while(randomNumber < 0.5){
    randomNumber = Math.random();
}

console.log(randomNumber);

// looping through an array
const todoList = [
    'make dinner',
    'wash dishes',
    'watch youtube'
];

for (let i = 0; i < todoList.length; i++) {
    const value = todoList[i];
    console.log(value);
}

const nums = [1, 2, 3];
let total = 0;

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    total += num;
}

console.log(total);

// doubling array
const numsDoubled = [];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    numsDoubled.push(num * 2);

}

console.log(numsDoubled);