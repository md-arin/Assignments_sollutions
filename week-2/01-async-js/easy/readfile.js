const fs = require('fs');
console.log("At the top")
fs.readFile('a.txt', 'utf-8', function(err,data){
        console.log(data);
})

let a =0;
console.log("Loop initialized")
for(let i =0; i<10000000000;i++){
        a=a+i;
}

console.log("Loop ends")
