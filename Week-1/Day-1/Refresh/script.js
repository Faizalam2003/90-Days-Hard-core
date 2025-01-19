// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const loadUsersBtn = document.getElementById('loadUsers');
const usersList = document.getElementById('users');
const demoForm = document.getElementById('demoForm');

// Theme Toggle Functionality
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
};

// Initialize theme from localStorage
// Initialize theme from localStorage
const initializeTheme = () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
};

// Counter Functionality using Closure
const createCounter = () => {
    let count = 0;
    
    return {
        increment() {
            count++;
            this.updateDisplay();
        },
        decrement() {
            count--;
            this.updateDisplay();
        },
        updateDisplay() {
            countDisplay.textContent = count;
        }
    };
};

// API Integration with async/await
const fetchUsers = async () => {
    try {
        loadUsersBtn.disabled = true;
        loadUsersBtn.textContent = 'Loading...';
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Failed to fetch users');
        
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Error:', error);
        usersList.innerHTML = `<li class="error">Error loading users: ${error.message}</li>`;
    } finally {
        loadUsersBtn.disabled = false;
        loadUsersBtn.textContent = 'Load Users';
    }
};

// Display users using modern array methods
const displayUsers = (users) => {
    const userElements = users
        .map(user => `
            <li>
                <strong>${user.name}</strong>
                <p>Email: ${user.email}</p>
            </li>
        `)
        .join('');
    
    usersList.innerHTML = userElements;
};

// Form handling with validation
const handleFormSubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Example of form validation
    if (!data.email.includes('@')) {
        alert('Please enter a valid email address');
        return;
    }
    
    console.log('Form data:', data);
    event.target.reset();
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    
    const counter = createCounter();
    
    themeToggle.addEventListener('click', toggleDarkMode);
    incrementBtn.addEventListener('click', () => counter.increment());
    decrementBtn.addEventListener('click', () => counter.decrement());
    loadUsersBtn.addEventListener('click', fetchUsers);
    demoForm.addEventListener('submit', handleFormSubmit);
});

// Example of ES6+ Features
// 1. Arrow Functions
const double = num => num * 2;

// 2. Template Literals
const greeting = name => `Hello, ${name}!`;

// 3. Destructuring
const person = { name: 'John', age: 30 };
const { name, age } = person;

// 4. Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// 5. Promise Example
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// 6. Async/Await Example
const example = async () => {
    try {
        await delay(1000);
        console.log('Delayed log');
    } catch (error) {
        console.error(error);
    }
};
