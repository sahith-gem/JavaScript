

//default promise behaviour 

function wait (seconds) {
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{resolve();console.log("promise resolved")},seconds)
    })
}

wait(5000)