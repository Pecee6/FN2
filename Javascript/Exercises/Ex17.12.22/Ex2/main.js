let num = prompt("Select a number") ;

let counter = 0;

console.log("Your number is " + num)

while (num > 0) {
    num = Math.floor(num/10);
    counter++;
}

console.log("The number of digits of your number is : " + counter);