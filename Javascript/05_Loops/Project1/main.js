let mulTable = [];
let value = 7;

outer:
for (let i = 1; i <= 10; i++) {
    let temp = [];
    inner:
    for (let j = 1; j <= 10; j++){
        let res = i * j;
        temp.push(res);
    }
    mulTable.push(temp);
}
console.log(mulTable);