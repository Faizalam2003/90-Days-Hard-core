//undertand the endpoint

// _page=1;
// _limit=5;
// To move to the next page, increment the _page parameter

//state management
// maitain the varibale "currentPage" keep tracking of the current page number
// increment the currentPage with next button click

//data fetching
//UI Elements:
//Error Handling:

const postContainer = document.getElementById("postContainer");
const nextButton = document.getElementById("nextButton");

let currentPage = 1; //track the current page number

// function to fetch the posts

async function fetchPosts() {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
    );
    if (!res.ok) throw new Error("Failed to fetch posts");
    const posts = await res.json();
    // check if there are any posts
    if (posts.length === 0) {
      nextButton.disabled = true;
      nextButton.innerText = "No more posts";
      return;
    }
    // Display posts
    renderPosts(posts);
  } catch (error) {
    console.log("Error fetching posts", error);
  }
}

async function renderPosts(posts) {
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
    postContainer.appendChild(postElement);
  });
}

//add event listener to the next button
nextButton.addEventListener("click", () => {
  currentPage++;
  fetchPosts();
});
