let a = [1, 2, 'A', [3, 4, 'B', [5, {}, 'C'], 6], 'D', 7]
//find sum of all numbers without using flat
let sum = 0
function recursivesum(a){
    for (const i of a){
        if(Array.isArray(i)){
            recursivesum(i)
        }else if (typeof i === "number"){
            sum += i
        }
    }
    return sum ;
}
console.log(recursivesum(a))
