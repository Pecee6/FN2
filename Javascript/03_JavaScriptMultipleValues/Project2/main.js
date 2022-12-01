let inventoryOfStoreItems = [];

let item1 = {
    name: "BMW",
    model: "e35",
    cost: 2000,
    quantity: 10
}

let item2 = {
    name: "AUDI",
    model: "a4",
    cost: 3000,
    quantity: 21
}

let item3 = {
    name: "YUGO",
    model: "101",
    cost: 500,
    quantity: 5
}

inventoryOfStoreItems.push (item1, item2, item3);

console.log (inventoryOfStoreItems);

console.log(inventoryOfStoreItems[2].quantity);
