// Apis are used to access data from external sources such as databases, APIs, and web services. or send then data to external sources

// common apis protocols  : - REST , SOAP , GraphQL
//  https methods , get , post , put , delete ,
// status code : - 200 , 404 , 500

// Endpoint : -
// A URL where the API is accessed (e.g., https://api.example.com/users).

// fetch apis

// fetch() is the function used to make a get request to an endpoint.

fetch(url)
  .then((res) => res.json()) // parsed the data as a json
  .then((data) => console.log(data)) // use the data
  .catch((error) => console.log(error)); // handle the error

// use

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((data) => console.log("Post", data))
  .catch((error) => console.log("Error", error));

// async await with fetch apis

async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
