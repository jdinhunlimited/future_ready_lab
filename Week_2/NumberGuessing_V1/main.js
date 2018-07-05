/*eslint-env browser*/
function playGame(){
    alert("First enter a low number, then a high number. Then, guess a random number between them.");

    //get the low and high bound
    //uses parseInt() to get numbers, not strings
    var from = parseInt(prompt ("enter the lower number"));
    while (isNaN(from) || from <= 0 || from >= 1000){
        from = parseInt(prompt("enter the lower NUMBER that is higher than zero and less than 1000"))
    } 
    var to = parseInt(prompt("enter the higher bound"));
    while (isNaN(to) || to <= 0 || to >= 1000){
        to = parseInt(prompt("enter the higher NUMBER that is less than 1000 and more than 0"))
    } 
    while (to <= 0 || to >= 1000){
        to = parseInt(prompt("enter a value less than 1000 and more than 0"))
    } 
    while (to <= from){
        to = parseInt(prompt("enter a value more than your lesser value"))
    } 
    // math.random is only from 0 to 1, so we have this formula to get it to a high enough number
    // math.round to get an interger between [from, to] 
    var target = Math.round(Math.random()*(to - from) + from);
    var currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to));
    var totalGuesses = 1;
    while (isNaN(currentGuess)){
        currentGuess = parseInt(prompt("enter the NUMBER pLEAASE"))

    } 
    while(currentGuess <= from || currentGuess >=to){
        currentGuess = parseInt(prompt("Please type in a number between "+ from +" and "+ to))
    }
    while(currentGuess !=target){  
        if (currentGuess < target){
            currentGuess = parseInt(prompt ("enter a higher number"));   
    // loop until user guesses correct    

            totalGuesses ++;
        }
        else if (currentGuess > target){
            currentGuess = parseInt(prompt("enter a lower number"));


            totalGuesses++
        }    
    }
    alert ("It took " +totalGuesses + " tries to guess the correct number."); 
}