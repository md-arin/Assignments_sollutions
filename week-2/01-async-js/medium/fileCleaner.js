const fs = require('fs');

fs.readFile("cleaner.txt", 'utf-8',function(err,data){
    if(err){
        console.log(err)
    }
    else{
        console.log(data);
        console.log("After cleaning")
        data = data.replace(/ +/g, ' ');
        console.log(data)
    }
})