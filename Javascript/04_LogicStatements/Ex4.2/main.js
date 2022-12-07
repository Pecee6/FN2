let inputAge = prompt("What's your age?");

let userAge = Number(inputAge);

let message;

if (userAge >= 21) {
    message = "You can enter and buy alcohol" ;
} else if (userAge >= 19){
    message = "You can enter, but you cant buy alcohol";
} else {
    message = "You cant enter";
}

alert (message);