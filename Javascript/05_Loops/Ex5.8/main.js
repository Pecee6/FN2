let stringOutput ="";

let num = 3;

for (let i = 0; i < 10; i++){
    if (i === num){
        continue;
    }
    stringOutput += i;
}

console.log(stringOutput);