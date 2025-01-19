
// ====== JavaScript Learning Path ======

// Exercise 1: Variables and Data Types
// Practice with different data types and understand their behavior
const learningJS = {
    // String operations
    name: "JavaScript Fundamentals",
    // Number operations
    version: 2023,
    // Boolean operations
    isActive: true,
    // Array operations
    topics: ["Variables", "Functions", "DOM", "Events", "API"],
    // Object operations
    instructor: {
        name: "John",
        experience: 5
    }
};

// Exercise 2: String Operations
// Practice string methods and template literals
const stringPractice = () => {
    const text = "JavaScript is Amazing";
    console.log("Original:", text);
    console.log("Uppercase:", text.toUpperCase());
    console.log("Length:", text.length);
    console.log("Contains 'Script':", text.includes("Script"));
    console.log("First 4 chars:", text.slice(0, 4));
    
    // Template literals
    const name = "Learner";
    const greeting = `Hello ${name}, welcome to ${learningJS.name}!`;
    console.log(greeting);
};

// Exercise 3: Array Operations
// Practice array methods and understand their use cases
const arrayPractice = () => {
    const numbers = [1, 2, 3, 4, 5];
    
    // Map: Transform each element
    const doubled = numbers.map(num => num * 2);
    console.log("Doubled:", doubled);
    
    // Filter: Get elements that match condition
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    console.log("Even numbers:", evenNumbers);
    
    // Reduce: Combine elements into single value
    const sum = numbers.reduce((total, num) => total + num, 0);
    console.log("Sum:", sum);
};

// Exercise 4: DOM Manipulation
// Practice selecting and modifying DOM elements
const domPractice = () => {
    // Get elements by different methods
    const title = document.querySelector('h1');
    const buttons = document.querySelectorAll('button');
    const form = document.getElementById('demoForm');
    
    // Modify elements
    if (title) {
        title.style.color = 'var(--primary-color)';
        title.textContent = 'Learning JavaScript!';
    }
    
    // Add event listeners
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });
};

// Exercise 5: Async Operations
// Practice with Promises and async/await
const asyncPractice = async () => {
    try {
        // Simulate API call
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        
        // Process data
        const userNames = users.map(user => user.name);
        console.log("User names:", userNames);
        
        // Display in DOM
        const userList = document.getElementById('users');
        if (userList) {
            userList.innerHTML = userNames
                .map(name => `<li>${name}</li>`)
                .join('');
        }
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};

// Exercise 6: Local Storage
// Practice storing and retrieving data
const storagePractice = () => {
    // Store data
    const userData = {
        name: "User",
        theme: "dark",
        lastVisit: new Date().toISOString()
    };
    
    localStorage.setItem('userData', JSON.stringify(userData));
    
    // Retrieve data
    const stored = localStorage.getItem('userData');
    const parsedData = stored ? JSON.parse(stored) : null;
    console.log("Stored data:", parsedData);
};

// Exercise 7: Form Handling
// Practice form validation and submission
const formPractice = () => {
    const form = document.getElementById('demoForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validate
        if (!data.email.includes('@')) {
            alert('Please enter a valid email');
            return;
        }
        
        // Process form
        console.log("Form data:", data);
        form.reset();
    });
};

// Initialize all exercises when document loads
document.addEventListener('DOMContentLoaded', () => {
    console.log("Starting JavaScript exercises...");
    
    // Run exercises
    stringPractice();
    arrayPractice();
    domPractice();
    storagePractice();
    formPractice();
    
    // Setup theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDark);
        });
    }
    
    // Load saved theme
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
        document.body.classList.add('dark-mode');
    }
});

// Daily Practice Questions:
/*
Day 1: Variables and Strings
1. Create a function that reverses a string
2. Write a function that counts vowels in a string
3. Create a function that converts snake_case to camelCase

Day 2: Arrays and Objects
1. Write a function that finds the most frequent element in an array
2. Create a function that merges two arrays without duplicates
3. Write a function that deep clones an object

Day 3: DOM Manipulation
1. Create a function that builds a table from an array of objects
2. Write a function that creates a countdown timer
3. Create a function that implements infinite scroll

Day 4: Async Programming
1. Write a function that loads data from multiple APIs in parallel
2. Create a function that retries failed API calls
3. Implement a debounce function

Day 5: Advanced Concepts
1. Implement a simple pub/sub system
2. Create a basic state management system
3. Write a function that implements method chaining

Practice Tips:
1. Code daily, even if just for 30 minutes
2. Break down problems into smaller steps
3. Use console.log() to understand code flow
4. Read and understand error messages
5. Practice typing code instead of copying/pasting
*/
