const fs = require('fs');

fs.writeFile('a.txt', "This data is inserted using writeFile", (err)=>{
    if(err) {
        console.log(err)
    }
    else{
        console.log("File writing is successful")
        console.log("Updated contents are: ")
        console.log(fs.readFileSync('a.txt','utf-8'));
    }
})