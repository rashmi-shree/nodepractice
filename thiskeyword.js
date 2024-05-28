const obj = {
    name:'john',
    printName:function(){
        console.log(this);
        console.log(this.name);
    }
}
obj.printName();