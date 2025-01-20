function createCounter(init) {
    let count = init;  // Store the initial value
    
    return {
        increment: function() {
            return ++count;  // Increment and return the new value
        },
        decrement: function() {
            return --count;  // Decrement and return the new value
        },
        reset: function() {
            count = init;    // Reset to initial value
            return count;    // Return the reset value
        }
    }
}

// count +1  = count 
//count -1  = count 


const ans = createCounter(10);
console.log(ans.increment()); // Should print 11
console.log(ans.decrement()); // Should print 10
console.log(ans.reset());     // Should print 10