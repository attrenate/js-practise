const buttonElement = document.querySelector('js-subscrieb-button');
console.log('js-subscribe-button');


// function for button
function subscribe(){
    const buttonElement = document.querySelector('.js-subscribe-button');
    if (buttonElement.innerText === 'Subscribe') {
      buttonElement.innerHTML = 'Subscribed';
   } else {
      buttonElement.innerHTML = 'Subscribe';
   }
}