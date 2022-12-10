let num1 = parseInt(prompt("First number")) ;
let num2 = parseInt(prompt("Second number")) ;
let operation = prompt("add/substract/multiply/divide/modulus");

if (operation === "add" ) {
    alert (num1 + num2)
} else if (operation === "substract") {
    alert (num1 - num2)
} else if (operation === "multiply") {
    alert (num1 * num2)
} else if (operation === "divide") {
    alert (num1 / num2)
} else if (operation === "modulus") {
    alert (num1 % num2)
} else {
    alert ("Invalid operation")
}