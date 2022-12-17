let restorant = {
    Name: "REMO",
    Cake: "Cheesecake",
    Ingridients: ["Cream Chese" , "Sugar", "Vanila Extract"],
};

for ( elements in restorant){
    console.log(elements);
}

for (elements in restorant.Ingridients){
    console.log(restorant.Ingridients[elements]);
}