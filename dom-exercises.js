const button = document.querySelector('.js-button');

button.addEventListener('click', function () {
    console.log("Button clicked:", button.innerText);
});


function changeText(){
    const button2 = document.querySelector('.js-b-button');
    if (button2.innerText === '9b') {
        button2.innerHTML = 'You clicked the button';
     } else {
        button2.innerHTML = '9b';
     }

}



const headButton = document.querySelector('.js-head');
const tailsButton = document.querySelector('.js-tails');
const choiceDisplay = document.querySelector('#choice');


headButton.addEventListener('click', function () {
    choiceDisplay.textContent = 'head'; 
});


tailsButton.addEventListener('click', function () {
    choiceDisplay.textContent = 'tails'; 
});
