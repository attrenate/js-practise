// variables
const computerMove = '';
// functions
function function1(){
    console.log('hello');
    console.log(2 + 2);
}

function1();

function pickComputerMove(){
    const randomNumber = Math.random();
    let result = '';
    if(randomNumber >= 0 && randomNumber < 1 / 3){
        const computerMove = 'rock';
         } else if(randomNumber >= 1 /3 && randomNumber < 2 / 3){
             const computerMove = 'paper';
          } else if(randomNumber >= 2 /3 && randomNumber <  1){
             const computerMove = 'scissors';
          }
             console.log(computerMove);
             if(computerMove === 'rock'){
              result = 'Tie.';    
             } else if(computerMove === 'paper'){
               result = 'You lose.' 
             } else if(computerMove === 'scissors'){
               result = 'You win'; 
             } 

             alert(`You picked rock. Computer picked ${
                computerMove}. ${result}`);
                // return ends function immediatly 
                return computerMove;

}
// this function takes it's parameter and  calculates Tax.
// functions can have multiple parameters
// we can add default value to parameters
function calculateTax(x, taxPercent = 0.1){
    console.log( x * taxPercent);
    console.log('Tax is: ' + x * taxPercent);

}
calculateTax(2000, 20);
calculateTax(5000, 0.25);


function playgame(playerMove){
    const randomNumber = Math.random();
    let result = '';
    if (playerMove === 'scissors'){
        if(randomNumber >= 0 && randomNumber < 1 / 3){
            const computerMove = 'rock';
             } else if(randomNumber >= 1 /3 && randomNumber < 2 / 3){
                 const computerMove = 'paper';
              } else if(randomNumber >= 2 /3 && randomNumber <  1){
                 const computerMove = 'scissors';
              }
              console.log(computerMove);
              if(computerMove === 'rock'){
               result = 'Tie.';    
              } else if(computerMove === 'paper'){
                result = 'You lose.' 
              } else if(computerMove === 'scissors'){
                result = 'You win'; 
              } else if(playerMove === 'paper'){
                if(randomNumber >= 0 && randomNumber < 1 / 3){
                    const computerMove = 'rock';
                     } else if(randomNumber >= 1 /3 && randomNumber < 2 / 3){
                         const computerMove = 'paper';
                      } else if(randomNumber >= 2 /3 && randomNumber <  1){
                         const computerMove = 'scissors';
                      }
                      console.log(computerMove);
                      if(computerMove === 'rock'){
                       result = 'Tie.';    
                      } else if(computerMove === 'paper'){
                        result = 'You lose.' 
                      } else if(computerMove === 'scissors'){
                        result = 'You win';  
              }

    }
             alert(`You picked ${playerMove}. Computer picked ${
                computerMove}. $
                {result}`);
                // return ends function immediatly 
                return computerMove;
 }