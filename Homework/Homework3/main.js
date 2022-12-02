// Ex 1.1

let firstName = 'Lata';

// Ex 1.2 
// X has string value

let x = 'Geeta';

// Ex 1.3

let flower = 'rose';
let tree = 'maple';

// Ex 1.4
// X has 'Toe' value

let x = 'Tic';
x = 'Tac';
x = 'Toe';

// Ex 1.5
// X has 'Hardy' value

let x = 'Laurel';
let y = 'Hardy';
let z = y;
y = x;
x = z;

// Ex 1.6

-9 * 3 // -27
"value is" + 50 // value is 50
17 % 5 // 2
5 % 17 // 5
(4 == 4) // true
(4 != 5) // true
(7 <= 8) // true
Math.ceil(x) - Math.floor (x)

// Ex 1.7

alert ("Hello world.")

// Ex 1.8

let num = prompt();
alert(num);

// Ex 1.9 
// The product of 10 and 5 is 50

let n1 = 10;
let n2 = 5;
console.log("The product of " + n1 + " and" + n2 + "is" + n1*n2);

// Ex 2.1

let n1 = prompt();
let n2 = prompt();
console.log("The product of " + n1 + " and" + n2 + "is" + n1*n2);

// Ex 2.2

let n1 = prompt();
let n2 = prompt();
console.log ("n1", n1);
console.log ("n2", n2);

if (n1<n2)
{
    console.log ("n2 is the larger");
} else if (n1>n2)
{
    console.log ("n1 is the larger");
} else if (n1=n2)
    console.log ("n1 and n2 are equal");

// Ex 2.3

let numOfChildren;
let partnerName;
let geographicLocation;
let jobTitle;

console.log("You will be a " + jobTitle + " in " + geographicLocation ", and married to " + partnerName + " with " + numOfChildren "kids.");

// Ex2.4

let birthYear = 2002 ;
let futureYear = 2041 ;
possibleAge = futureYear - birthYear;
possibleAge2 = possibleAge + 1;

console.log ("I will be either " + possibleAge " or " + possibleAge2 + " in " + futureYear);

// Ex2.5

let currentAge = 20;
let maximumAge = 80;
let amountPerDay = 10;

yearAmount = 365 * amountPerDay;
x = (maximumAge - currentAge) * yearAmount;

console.log("You will need " + x " to  last you until the ripe old age of " + maximumAge );

// Ex2.6

let radius;
let circumference;
const pi = 3.14;

console.log ("The  circumference is " + 2*pi*radius);
console.log ("The area is " + pi*Math.pow(radius,2));

// Ex2.7

let celsius;
let fahrenheit;
celsiusToFahrenheit = celsius * 9 / 5 + 32;
fahrenheitToCelsius = (fahrenheit - 32) * 5 / 9;

console.log(celsius + "°C is" + celsiusToFahrenheit + "°F");
console.log(fahrenheit + "°F is" + fahrenheitToCelsius + "°C");