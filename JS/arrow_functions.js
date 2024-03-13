const sqr = num => num * num;
console.log(sqr(5));

const person = {
    name: 'Outer Scope',
    test(){
        console.log(this.name);
        setTimeout(()=>{
            console.log(this.name);
            console.log(this);
        },1000)
    }
}
person.test();