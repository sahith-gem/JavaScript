

//default promise behaviour 

// function wait (seconds) {
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{resolve();reject() ;console.log("promise resolved")},seconds)
//     })
// }

// wait(5000).then(()=>console.log('Promise executed')).catch(()=>console.log("promise rejected")).finally(()=>console.log("run's everytime"))

class MyPromise {
    constructor(executorFunction){
        this._state ='pending';
        this._successCallbacks =[];
        this._errorCallbacks =[];
        executorFunction(
            this.resolverFunction.bind(this),
            this.rejectorFunction.bind(this)
        )

    }

    then(callback){
        this._successCallbacks.push(callback)
        return this
    }

    catch(callback){
        this._errorCallbacks.push(callback)
        return this;
    }

    resolverFunction(){
        this._state='resolved';
        this._successCallbacks.forEach((cb)=>cb())
    }

    rejectorFunction(){
        this._state='rejected';
        this._errorCallbacks.forEach((cb)=>cb());
    }
}

function wait(seconds){
    const p = new MyPromise((resolve,reject)=>{
        setTimeout(()=>resolve(),seconds*1000)
    })

    return p;
}

wait(5).then(()=>console.log('first then')).then(()=>console.log('Second then'))