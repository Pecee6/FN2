let array = [1, 2, 70, 3, 10, 5, 0];

let largest = 0;

for(i = 0; i < array.length; i++){
    if(array[i] > largest){
        largest = array[i];
    }
}
console.log(largest);