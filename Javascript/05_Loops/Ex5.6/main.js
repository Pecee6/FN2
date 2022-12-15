let arr = [];

for (let i = 0; i <= 10; i++){
    arr.push(i);
} 
console.log(arr);

for (let j = 0; j < arr.length; j ++){
    console.log(arr[j]);
}

for (let number of arr){
    console.log(number);
}