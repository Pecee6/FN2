let a = prompt("Side a :");
let b = prompt("Side b :");
let c = prompt("Side c :");

if (a == b && a == c && c == b){
    alert("Equilateral triangle")
} else if (a == b || b == c){
    alert("Isosceles triangle")
} else {
    alert("Scalene triangle")
}