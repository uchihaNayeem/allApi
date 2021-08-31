

/* closure er best video BY JM */



function stopwatch(){
    let counter = 0;
    return function(){
        counter++
        return counter;
    }
}

let clock1 = stopwatch();
