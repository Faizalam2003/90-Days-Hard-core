
/***
 * Write a function using closures to implement a "rate limiter" that allows a function to be called at most once every 2 seconds.
  and and how think the logic to solve this type of problem and explain each 
 */


//   understand the problem and how think the logic to solve this type of problem 
/**
 *  the target function is called at most once every 2 seconds. 
 * if the function is called more than once within 2 seconds, it should return an error message. or ingnore the call with some message
 * 
 * 
 * -- use clouser to persist the last call time and check the current call time with the last call time 
 *Store the timestamp of the last execution using a variable that the inner function can access.

 if the function is passed the 2sec , allow the function to be excetuded and update the last execution time
 otherwise ignore the call

 tool to use 

 Date.now() to get the current time in milliseconds
Closures to store and update the lastExecuted time across calls.


 */



    function rateLimiter(fn, delay) {
        let lastExecuted = 0; // Track the last execution time

        return function (...args) {
            const now = Date.now();
            if (now - lastExecuted >= delay) {
                // If the delay has passed, execute the function
            lastExecuted = now; // Update the last executed time
            fn(...args); // Execute the function
            }
            else{
                console.log("Function call ignored. Please wait.");
            }
        
       }

    }
    const logMessage = (message) => console.log(`Logged: ${message}`);

const rateLimitedLog = rateLimiter(logMessage, 2000);

// Test the rate limiter
rateLimitedLog("First call"); // Executes immediately
rateLimitedLog("Second call"); // Ignored (called too soon)
setTimeout(() => rateLimitedLog("Third call after 2 seconds"), 2100); // Executes after 2 seconds