const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

const avatar = document.getElementById("avatar");
const name = document.getElementById("name");
const username = document.getElementById("username");
const joinDate = document.getElementById("joinDate");
const bio = document.getElementById("bio");

const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");

const locationEl = document.getElementById("location");
const blog = document.getElementById("blog");
const twitter = document.getElementById("twitter");

const userInfo = document.getElementById("userInfo");
const searchForm = document.querySelector("form");


searchBtn.addEventListener("click", () => {
    const username = searchInput.value.trim();
    if (username !== "") {
      fetchGitHubUser(username);
    }
  });

async function fetchGitHubUser(username) {
    const url = `https://api.github.com/users/${username}`;
    
    try{
        const res = await fetch(url);
        const data = await res.json();
        
        if(res.status === 404) {
            alert("User not found. Please try again.");
            userInfo.classList.add("hidden");
            return
        }
        updateUserInfo(data);
    }catch (error) {
        console.error("Error fetching user data:", error);
        alert("An error occurred while fetching user data. Please try again.");
    }
    
}
function updateUserInfo(data) {
    avatar.src = data.avatar_url;
    name.innerText = data.name || "No Name";
    username.innerText = `@${data.login}`;
    
    const date = new Date(data.created_at);
    joinDate.innerText = `Joined ${date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })}`;
  
    bio.innerText = data.bio || "No bio available.";
  
    repos.innerText = data.public_repos;
    followers.innerText = data.followers;
    following.innerText = data.following;
  
    locationEl.innerText = data.location || "Not available";
    const blogLink = document.getElementById("blog");

if (blogLink) {
  let blog = data.blog?.trim();

  if (blog) {
    if (!/^https?:\/\//i.test(blog)) {
      blog = "https://" + blog;
    }

    blogLink.href = blog;
    blogLink.textContent = data.blog;
    blogLink.target = "_blank";
    blogLink.rel = "noopener noreferrer";
    blogLink.classList.remove("opacity-50", "pointer-events-none");
  } else {
    blogLink.href = "#";
    blogLink.textContent = "Not Available";
    blogLink.classList.add("opacity-50", "pointer-events-none");
  }
}

    twitter.innerText = data.twitter_username || "Not available";
  
    userInfo.classList.remove("hidden");
  }
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchBtn.click();
    }
  });
  
















  document.addEventListener("DOMContentLoaded", () => {
    fetchGitHubUser("codewmilan");
  });
  
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault(); // 🔴 Prevent form from reloading the page
    const username = searchInput.value.trim();
  if (username !== "") {
    fetchGitHubUser(username);
  }
});