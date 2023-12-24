let count = 0;
function counter(){
    
    count= count+1;
    return console.log(count);
}

setInterval(counter,1000);