

// aync and await : -   async is the function and await is the keyword  which wait for the function to complete


async function fetchData() {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data  = await response.json();
        console.log(data)
        
    } catch (error) {
        console.log(error)
        
    }
}


//real world scenario
/**
 * 1. fetch the data
 * 2. Performing chained asynchronous operations in a cleaner way
 * 3. Writing database queries in Node.js
 * 
 * 
 * interview question
 * 
 * What is the purpose of async and await in JavaScript?
 * ans : -  the main purpose of async and await is to make asynchronous operations in a cleaner way 
 * and it makes the code more readable and easier to understand
 * 
 * 
 * How does error handling work in async/await?
 * ans : - error handling in async/await is done using try and catch blocks
 */


// Closures

function outer(){
    let x = 10;
   return function (){
        console.log(x);
        x++;
        console.log(x);
    }
}

const innerFun = outer();
// console.log(innerFun)

innerFun();
