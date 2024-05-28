

function reversestring(s){
    if (s.length <= 1){
        return s;
    }
    return s[s.length-1]+reversestring(s.slice(0,s.length-1))
}
const s = "mother"
console.log(s.slice(0, 5))
console.log(s[5])
let output = reversestring(s)
console.log("reversed",output);