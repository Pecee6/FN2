let a = prompt("Enter your points");

if (a >= 90 && a <= 100) {
    alert("S grade")
} else if (a >= 80 && a <= 89) {
    alert("A grade")
} else if (a >= 70 && a <= 79) {
    alert("B grade")
} else if (a >= 60 && a <= 69) {
    alert("C grade")
} else if (a >= 50 && a <= 59) {
    alert("D grade")
} else if (a >= 40 && a <= 49) {
    alert("E grade")
} else if (a < 40){
    alert("Student has failed")
} else {
    alert ("Invalid points")
}