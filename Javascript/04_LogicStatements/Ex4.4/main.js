let randomNumber = Math.random();

randomNumber = randomNumber * 6;

randomNumber = Math.floor (randomNumber);

console.log (randomNumber);

let userInput = prompt ("What is your question?");
let answer;

switch (randomNumber) {
    case 0 : 
    answer = "Yes"
    break ;

    case 1 : 
    answer = "No"
    break ;

    case 2 : 
    answer = "Maybe"
    break ;

    case 3 : 
    answer = "Probably"
    break ;

    case 4 : 
    answer = "For sure"
    break ;

    case 5 : 
    answer = "Probably not"
    break ;
}

alert (userInput +"?" + " - " + answer);