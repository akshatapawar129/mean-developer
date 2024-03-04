function handleMouseOver(){
 //   alert('Mouse Over detected');
}

//Variables
var x = 10; //number
var str = 'hello' //string
isValid = false; //boolean

var num1 = 10;
var num2 = 20;

//other datatype
var person = {
    name : 'sudha',
    age : 28,
}
var z; //undefined
function sum(n1, n2){
    // n1 and n2 are called as function parameters  
    n1 + n2;
// alert(n1);
}


sum(10,20);// here 10 and 20 are called as arguments
sum(30,44)

// Operartors
n1 = 20;
n2 = 30;
//1. Arithamatic Operators : + - * / ++ -- %
// n1+n2;
// n1-n2;
// n1*n2;
// n1/n2;
// n1%n2;
// n1++;
// n1--;

//2. Assignment Operators
//x += y; // x = x + y

// array of objects
var newarray = [{
    id : 1,
    firstname : 'sudha'
},
{
    id : 2,
    firstname : 'ABC'
}]
for (const val of newarray) {
  console.log(`Id : ${val.id} and Name : ${val.firstname}` )
}

for (var obj in newarray){
    console.log(newarray[obj].id);
}