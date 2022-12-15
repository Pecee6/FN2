let choices = ["rock", "paper", "scissors"]

let playerChoice = Math.floor(Math.random() * 3) ;

let computerChoice = Math.floor(Math.random() * 3) ;

let showChoice = choices[computerChoice];
console.log("Computer choise: " + showChoice);

showChoice = choices[playerChoice];
console.log("Player choise " + showChoice);

if (choices[computerChoice] == choices[playerChoice]) {
    console.log("It's a tie !!! ");
} else if (choices[computerChoice] === "rock" && choices[playerChoice] === "paper" ){
    console.log("Player Wins !!!");
} else if (choices[computerChoice] === "paper" && choices[playerChoice] === "scissors" ){
    console.log("Player Wins !!!");
}else if (choices[computerChoice] === "scissors" && choices[playerChoice] === "rock" ){
    console.log("Player Wins !!!");
}else if (choices[playerChoice] === "rock" && choices[computerChoice] === "paper" ){
    console.log("Computer Wins !!!");
} else if (choices[playerChoice] === "paper" && choices[computerChoice] === "scissors" ){
    console.log("Computer Wins !!!");
}else if (choices[playerChoice] === "scissors" && choices[computerChoice] === "rock" ){
    console.log("Computer Wins !!!");
}
