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