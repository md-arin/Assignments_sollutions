function counter(count){
    console.log(count)
    if(count<10){
        setTimeout(()=>counter(count+1),1000)
    }
}

counter(0);