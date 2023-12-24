const fs = require('fs');

function myReadfile(){
    return new Promise(function(resolve){
        console.log("inside promise")
        fs.readFile("a.txt", 'utf-8',function (err,data){
            console.log("before resolve")
            resolve(data);
        });
    })
}

function done(data){
    console.log(data)
}

myReadfile().then(done);