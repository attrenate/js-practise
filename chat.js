function getAverageRating(ratings) {
    if (ratings.length === 0) return 0;

    let sum = ratings.reduce((total, num) => total + num, 0);
    let average = sum / ratings.length; 
    return Number(average.toFixed(1)); 
}

// Example usage:
console.log(getAverageRating([5, 4, 3, 5, 2])); 
console.log(getAverageRating([4, 4, 4, 4, 4])); 
console.log(getAverageRating([])); 
console.log(getAverageRating([5, 4, 3, 5, 2])); 


function formatPrice(price) {
    
    
    if (price === 0) {
        return "Free";
    }
    
    
    
    let formattedNumber = price.toFixed(2);
    
    
    formattedNumber = Number(formattedNumber).toLocaleString("en-US", { minimumFractionDigits: 2 });

    
    return "$" + formattedNumber;


    
}

// Example usage:
console.log(formatPrice(1299.99)); 
console.log(formatPrice(49));      
console.log(formatPrice(1000000)); 
console.log(formatPrice(0));       
console.log(formatPrice(-50));     



const products = [
    { name: "Table", price: 200, inStock: true },
    { name: "Chair", price: 50, inStock: false },
    { name: "Couch", price: 500, inStock: true }
  ];
  
  console.log(getAvailableProducts(products));
 

  function getAvailableProducts(products){
    return products.filter(product => product.inStock);

  }
  