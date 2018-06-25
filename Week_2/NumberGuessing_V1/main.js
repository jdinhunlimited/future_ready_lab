/*eslint-env browser*/
function playGame(){
alert("First enter a low number, then a high number. Then, guess a random number between them.");

//get the low and high bound
//uses parseInt() to get numbers, not strings
var from = parseInt(prompt ("enter the lower number"));

var to = parseInt(prompt("enter the higher bound"));
// math.random is only from 0 to 1, so we have this formula to get it to a high enough number
// math.round to get an interger between [from, to] 
var target = Math.round(Math.random()*(to - from) + from);
var currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to));
var totalGuesses = 1;

  while(currentGuess !=target){                                 
if (currentGuess < target){
    currentGuess = parseInt(prompt ("enter a higher number"));   
// loop until user guesses correct    
 
    totalGuesses ++;
}else if (currentGuess > target){
currentGuess = parseInt(prompt("enter a lower number    "));

    
    totalGuesses++
}    }
alert ("It took " +totalGuesses + " tries to guess the correct number."); 
}