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

function calTotal(){
    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value);
    
    if (cost < 49){
        cost += 10;
    
    }
    document.querySelector('.js-total-cost')
    .innerHTML = `$${cost}`;
}

// So clicks, keydowns are events, onclick and onkeydown are event listeners
// check out: onscroll, onmouseenter, onmouseleave and so on.

function handleCostKeydown(event){
    
    if(event.key === 'Enter'){
        calTotal();
    }
}