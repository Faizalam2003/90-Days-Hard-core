//  Sending Data to APIs (POST)

async function createPost() {
  const post = {
    title: "New Post",
    body: "This is the content",
    userId: 1,
  };

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    const data = await response.json();
    console.log("Created Post", data);
  } catch (error) {
    console.log(error);
  }
}

// Practice logic for any probelms
//What data do you need to fetch/send? From which endpoint?
// Choose the HTTP Method: GET, POST, PUT, DELETE.
// Use Error Handling: Always include .catch or try/catch to handle errors.
// Optimize Requests: Avoid redundant API calls; use caching or debouncing if necessary.
// Use Async/Await: Use async/await to handle asynchronous operations.
