// dom is linked to a web-page
document.body.innerHTML = 'hello';
document.title = 'nchaba';

// Properties and methods

console.log(document.title);
document.title = 'changed';
console.log(document.body);

// we can have html elements inside of our js

console.log(typeof document.body);
console.log(document.body.innerHTML);
document.body.innerHTML = 'changed';
document.body.innerHTML = '<button>hello</button>';
console.log(document.querySelector('button').innerHTML);
document.querySelector('button')
  .innerHTML = 'changed';
const buttonElement = console.log(document.querySelector('.Sbutton'));;