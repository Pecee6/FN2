let randomNum = Math.floor(Math.random() * 10);

let guesses = 0;

let hint = "";

let number = 0;

do {

let input = prompt("Please enter a number between 0 and 10");

number = parseInt(input);

guesses++;

if (number > randomNum) {
    alert("To high");
} else if (number < randomNum) {
    alert("To low");
}else if (number == randomNum) {
    alert("Bravo! You're correct after " + guesses + " guess(es). ");
}
}while(number != randomNum);