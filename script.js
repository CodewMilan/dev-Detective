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
    blog.innerText = data.blog || "Not available";
    twitter.innerText = data.twitter_username || "Not available";
  
    userInfo.classList.remove("hidden");
  }
  