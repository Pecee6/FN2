let arr = ["Strong", "Smart", "Fast", "Beautiful"] ;

function askName () {
    let name = prompt("Your name is : ?")
    return name;
}

let randomNum = Math.floor( Math.random() * arr.length ) ;

console.log(askName() + " is " + arr[randomNum]);