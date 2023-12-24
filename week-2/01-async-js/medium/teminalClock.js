function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    console.log(time);
}

setInterval(clock,1000);