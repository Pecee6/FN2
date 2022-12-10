let a = prompt("Prv broj :");
let b = prompt("Vtor broj :");
let c = prompt("Tret broj :");

if (a > b && a > c ) {
    alert("Prviot broj e najgolem");
} else if (b > a && b > c){
    alert("Vtoriot broj e najgolem");
} else if (c > a && c > b){
    alert ("Tretiot broj e najgolem");
} else {
    alert ("Site broevi se ednakvi")
}