let year = parseInt(prompt("Select a year"));
let month = parseInt(prompt("Number of the month"));
let dayCount;

switch (month) {
    case 1 : 
    case 3 :
    case 5 :
    case 7 :
    case 8 :
    case 10:
    case 12:
        alert ("The number of days is 31")
        
        break;
    case 4 :
    case 6 :
    case 9 :
    case 11 : 
        alert ("The number of days is 30")
        dayCount = 30;
        break;
    case 2 :
        if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
        alert ("The number of days is 29")
        }else{
        alert ("The number of days is 28")
        }
        break;
    default:
       alert ("Invalid month")
} 
