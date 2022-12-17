let array = [1, 2, 70, 3, 10, 5, 0];

let minNum = 0;

for(i = 0; i < array.length; i++){
    if(array[i] < minNum){
        minNum = array[i];
    }
}
console.log(minNum);