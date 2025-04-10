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