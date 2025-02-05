// Send a POST request to https://jsonplaceholder.typicode.com/users with user details.

async function createUser() {
  const user = {
    name: "faiz",
    email: "faiz@123",
    phone: "1234567890",
  };
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(user),
    });
    const data = await res.json();
    console.log("Created User", data);
  } catch (error) {
    console.log(error);
  }
}
