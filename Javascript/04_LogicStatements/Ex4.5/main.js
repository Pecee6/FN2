let price = prompt ("Select a number between 0 and 10");

userInput = Number(price);

let message = "My Selection: " ;

switch (userInput) {
    case 0 :
        message += " Bear" ;
        break;
        case 0 :
    case 1 :
        message += " Bunny" ;
        break;
    case 2 :
    case 3 :
        message += " Giraffe" ;
        break;
    case 4 :
        message += " Horse" ;
        break;
    case 5 :
    case 6 :
        message += " Ball" ;
        break;
    case 10 :
    case 7 :
        message += " Bird" ;
        break;
    case 8 :
        message += " Fish" ;
        break;
    case 9 :
        message += " Turtle" ;
        break;
    default:
        message = "Invalid input" ;
        break;
}

alert(message);
