let shoppingList = [];

shoppingList= ["Milk" , "Bread" , " Apples"];

shoppingList.splice (1,1,"Bananas", "Eggs");

console.log(shoppingList.pop());

shoppingList.sort();

console.log(shoppingList.indexOf("Milk"));

shoppingList.splice ( 1,0, "Carrots", "Lettuce");

let shoppingList1 = ["Juice" , "Pop"];

let shoppingList3;

shoppingList3 = shoppingList.concat(shoppingList1,shoppingList1);

console.log(shoppingList3.lastIndexOf("Pop"));

console.log(shoppingList3);
