const arr = [1,2,3,4,5]

// let res = arr.filter((i)=>i>2)
// console.log(res);

function printVal(i){
    return i>2
}

Array.prototype.myFilter = function(cb){
    let o =[]
    for (var i =0 ;i<this.length; i++){
        if (cb(this[i])){
            o.push(this[i])
        }
    }
    return o
}
let res = arr.myFilter(printVal)
console.log(res);