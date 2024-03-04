"use strict"
var global  = "Global";
function abc(){
 var x = 10;
    let y = 20;
    console.log(global);
    var someCondition = true;
    if(someCondition){
        let x = 30;
    }
    console.log(x);
}
abc(); 