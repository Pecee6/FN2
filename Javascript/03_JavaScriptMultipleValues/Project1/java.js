const theList= [
    'Laurence',
    'Svekis',
    true,
    35,
    null,
    undefined,
    {test: 'one', score: 55},
    ['one', 'two']
]

console.log(theList);

theList.shift();

theList.pop();

theList.unshift("FIRST");

theList.splice(2,1, "hello World");

theList.splice(2,0, "MIDDLE");

theList.splice(4,4, "LAST");

console.log(theList);