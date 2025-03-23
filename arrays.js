let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); 

let colors = ["Red", "Green", "Blue"];
console.log(colors[0]); 
console.log(colors[2]); 

/* 
 Arrays have methods, such as: 
 
 .push(value) → Adds to the end

.pop() → Removes last element

.unshift(value) → Adds to the beginning

.shift() → Removes first element
*/

let cities = ["Paris", "London", "Berlin"];
cities.push("New York"); 
console.log(cities); 

cities.pop(); 
console.log(cities); 


// loops in arryas
let animals = ["Cat", "Dog", "Elephant"];
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]); 
}

let names = ["Alice", "Bob", "Charlie"];
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

function findLargestNumber(arr) {
    let maxNumber = arr[0]; 
  
    for (let i = 1; i < arr.length; i++) { 
      if (arr[i] > maxNumber) { 
        maxNumber = arr[i]; 
      }
    }
  
    return maxNumber; // Return the largest number
  }
  
  console.log(findLargestNumber([23, 11, 78, 45, 90, 5, 101])); 

  