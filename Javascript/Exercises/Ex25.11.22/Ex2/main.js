let ShuttleName = "Determination";
console.log(typeof(ShuttleName));

let ShuttleSpeed = 17500;
console.log(typeof(ShuttleSpeed));

let DistanceToMars = 225000000;
console.log(typeof(DistanceToMars));

let DistanceToMoon = 384400;
console.log(typeof(DistanceToMoon));

const MilesPerKm= 0.621;
console.log(typeof(MilesPerKm));

let MilesToMars = DistanceToMars * MilesPerKm;
console.log (MilesToMars + " Milles");

let HoursToMars = MilesToMars / ShuttleSpeed;
console.log (HoursToMars + " Hours");

let DaysToMars = HoursToMars / 24 ;
console.log (DaysToMars + " Days");

console.log (ShuttleName + " will take " + DaysToMars + " days to reach Mars.");

let MilesToMoon = DistanceToMoon * MilesPerKm;
console.log (MilesToMoon + " Milles");

let HoursToMoon = MilesToMoon / ShuttleSpeed;
console.log (HoursToMoon+ " Hours");

let DaysToMoon= HoursToMoon / 24;
console.log (DaysToMoon + " Days")

console.log (ShuttleName + " will take " + DaysToMoon + " days to reach Moon.");