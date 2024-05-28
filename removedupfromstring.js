let s = "hello"
let o = [];
let os = ""
for(var i of s ){
    console.log(i);
    if (o.indexOf(i) === -1){
        o.push(i)
        os += i
    }
}
console.log(os);