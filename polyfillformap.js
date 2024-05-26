const arr = [1,2,3,4,5]
// map always returns us a new array with modified data inside it and 
// forEach returns undefined
// let res = arr.map((i)=>{
//   return(i*2)
// })
// console.log(res);
function printvalue(i){
    return (i * 2);
}

Array.prototype.mymap = function(cb){
    let o = []
    for(var i =0; i<this.length; i++){
        o.push(cb(this[i], i, this))
    }
    return o;
}
let res = arr.mymap(printvalue)
console.log(res);