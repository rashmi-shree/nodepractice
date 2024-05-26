const arr = [1,2,3,4,5]

// arr.forEach((i)=>{
//     console.log(i);
// })

function printSomething(i){
    console.log(i);
}

Array.prototype.myForEach = function(cb){
    for (var i =0; i<this.length;i++){
        cb(this[i], this, i);
    }
}

arr.myForEach(printSomething)