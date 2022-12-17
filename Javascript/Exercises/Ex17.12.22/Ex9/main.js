let arr1 = [2, 4 , 6, 7, 8];

let arr2 = [4, 6, 1, 6, 0];

let product = [];

for (i = 0; i < arr1.length; i++){
    product[i] = arr1[i] * arr2[i];
    console.log(`The product of ${arr1[i]} and ${arr2[i]} = ${product[i]}`);
}