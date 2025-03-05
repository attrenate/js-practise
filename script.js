// Button elements by their IDs
const homeBtn = document.getElementById('home-btn');
const contactBtn = document.getElementById('contact-btn');
const salesBtn = document.getElementById('sales-btn');
const moreInfoBtn = document.getElementById('more-info-btn');
const contactSalesBtn = document.getElementById('contact-sales-btn');
const signInBtn = document.getElementById('sign-in-btn');

console.log("JavaScript is connected!");
// Event listeners and buttons
homeBtn.addEventListener('click', () => {
    window.location.href = 'home.html'; 
});

contactBtn.addEventListener('click', () => {
    window.location.href = 'contact.html';
});

salesBtn.addEventListener('click', () => {
    window.location.href = 'sales.html'; 
});

moreInfoBtn.addEventListener('click', () => {
    window.location.href = 'more-info.html'; 
});

contactSalesBtn.addEventListener('click', () => {
    window.location.href = 'contact-sales.html'; 
});

signInBtn.addEventListener('click', () => {
    window.location.href = 'sign-in.html'; 
});
