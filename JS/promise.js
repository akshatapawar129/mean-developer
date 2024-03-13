//producing code
function myAsyncFunction(name){
const myPromise = new Promise(function(resolve,reject){
 
    if(name == 'Sudha'){
        resolve('Promise Resolved');
     }
     else{
        reject('Promise Rejected');//failure
     }
});
return myPromise;
}

//consuming code
myAsyncFunction('Akshata').then(function(result){
console.log(result);
}).catch(function(error){
    console.log(error);
});

try{
10/0;
}
catch(error){
console.log(error);
}