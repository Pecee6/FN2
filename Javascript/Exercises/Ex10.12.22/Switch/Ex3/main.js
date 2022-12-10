let a = parseInt(prompt("First number"));
let b = parseInt(prompt("Second number"));

switch (true) {
    case (a > b) :
        alert("A is bigger")
        break;
    case (a < b) :
        alert ("B is bigger")
        break;
    
    default:
        alert ("The numbers are equal")
        break;
}