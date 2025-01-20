// Given an integer n, return a counter function.
// This counter function initially returns n and then returns 1 more than the previous value every 
//subsequent time it is called (n, n + 1, n + 2, etc).


function counter(n){
    let count = n;
    return function (){
       return count++;
    }
}


let newCounter = counter(10);
console.log(newCounter()); // 10
console.log(newCounter()); // 11
console.log(newCounter()); // 12



// function counter(n){
//     return function (){
//         return n++;
//     }
// }

// let newCounter = counter(10);
// console.log(newCounter()); // 10
// console.log(newCounter()); // 11
// console.log(newCounter()); // 12