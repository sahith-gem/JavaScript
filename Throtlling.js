function Throttle(fn , delay){
    let timer = null;

    return function(...args){
        if(timer===null){
            fn(...args);
            setTimeout(()=>{
                timer=null
            },delay)
        }
    }
}

function greet(name){
    console.log(`Hello ${name}`)
}
const ref = Throttle(()=>greet('James'),3000)

ref()
setTimeout(()=>ref(),1000)

setTimeout(()=>ref(),4000)