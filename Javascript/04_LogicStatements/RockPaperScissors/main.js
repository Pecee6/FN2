let choices = ["rock", "paper", "scissors"];

let playerChoice = Math.floor(Math.random() * 3);

let computerChoice = Math.floor(Math.random() * 3);

let showChoice = choices[playerChoice];
console.log ("Player choice: " + showChoice);

showChoice = choices[computerChoice];
console.log ("Computer choice: " + showChoice);

if (choices[playerChoice] === choices[computerChoice]){
    console.log("It's a tie !!! ");
} else if (choices[playerChoice] === "rock" && choices[computerChoice] === "scissors"){
    console.log("Player wins !!!")
} else if (choices[playerChoice] === "scissors" && choices[computerChoice] === "paper"){
    console.log("Player wins !!!")
} else if (choices[playerChoice] === "paper" && choices[computerChoice] === "rock"){
    console.log("Player wins !!!")
} else if (choices[playerChoice] === "scissors" && choices[computerChoice] === "rock"){
    console.log("Computer wins !!!")
} else if (choices[playerChoice] === "paper" && choices[computerChoice] === "scissors"){
    console.log("Computer wins !!!")
} else if (choices[playerChoice] === "rock" && choices[computerChoice] === "paper"){
    console.log("Computer wins !!!")
}