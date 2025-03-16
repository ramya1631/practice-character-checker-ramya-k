const readline = require("readline-sync");

// Prompt user for a word or phrase
let userInput = readline.question("Enter a word or phrase: ");
console.log("You answered: " + userInput);
// Prompt user for an index number
let index = readline.questionInt("Enter an index number to find the character: ");
console.log("You answered: " + index);
// to print  the  character from the index
if(index>=0 && index<userInput.length){
    let character=userInput[index];
    console.log("character present at the requested index is: "+ character);
} else{
    console.log("The provided index is invalid. The  provided index should be between 0 and " +  userInput.length-1);
}