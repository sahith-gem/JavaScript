if(!Array.prototype.myReduce){
 Array.prototype.myReduce = function( callBack , initialValue) {
     

    
    let startingIndex =0 ;
    if(initialValue){
        startingIndex =0
    }
   const result =0 ;
    for(let i=0;i<this.length ;i++){
     result+=  callBack(initialValue , this[i], i , this)

    }
    return result;

 }
}

const array = [1,2,3,4,5]
const result = array.myReduce((val)=>val+2 , 0)

console.log(result)
//Not completed 