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


String(25);
console.log('25' - 5);
console.log('25' + 5);

// window object

window.document
window.console.log('window');
window.alert