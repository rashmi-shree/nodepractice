const arr = [1,2,3,4,5]

// let res = arr.reduce((acc, curr)=>{
//     return acc + curr
// },0)
// console.log(res);



Array.prototype.myReduce = function(cb, initialvalue){
    let acc = initialvalue;
    for (var i =0; i<this.length; i++){
        acc = acc ? cb(acc, this[i]) : this[i]
    }
    return acc
}
let res = arr.reduce((acc, curr)=>{
    return acc + curr
},0)
console.log(res);