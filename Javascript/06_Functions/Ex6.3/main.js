
let num1 = 10;
let num2 = 6;
let operation = prompt("Select operation : ");

function calculator (n1 = 2,n2 = 3,op){
   let res = 0;

   switch (op) {
    case "-":
        res = n1 - n2;
        break;
    case "+":
        res = n1 + n2;
        break;
    case "*":
        res = n1 * n2;
        break
    case "/":
        res = n1 / n2;
        break;   
    default:
        res = n1 + n2;
        break;      
   }
   return res;
}

console.log(calculator(num1,num2,operation));
console.log(calculator(5,5,"*"));
console.log(calculator(3,7));
console.log(calculator());
