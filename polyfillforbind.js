let name = {
    firstName:"Rashmi",
    lastName:"S"
}
let printName = function(city, state){
    console.log(this.firstName + " " + this.lastName + " " + city + " " + state);
}

let a = printName.bind(name,"bangalore")
a("karnataka")


Function.prototype.mybind = function(...args){
    let obj = this;
    let params = args.slice(1)
    return function(...args2){
        obj.apply(args[0], [...params, ...args2])
    }
}
let b = printName.mybind(name,"bangalore")
b("karnataka")
