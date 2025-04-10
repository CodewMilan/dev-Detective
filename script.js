
async function fetchGitHubUser(username) {
    const url = `https://api.github.com/users/${username}`;
    const res = await fetch(url);
    const data = await res.json();
  
    if (data.message === "Not Found") {
      alert("User not found!");
      return;
    }
  
    document.getElementById("avatar").src = data.avatar_url;
    document.getElementById("name").innerText = data.name || "No Name";
    document.getElementById("username").innerText = "@" + data.login;
    document.getElementById("bio").innerText = data.bio || "No bio available";
    document.getElementById("repos").innerText = data.public_repos;
    document.getElementById("followers").innerText = data.followers;
    document.getElementById("following").innerText = data.following;
    document.getElementById("location").innerText = data.location || "Not available";
    document.getElementById("blog").innerText = data.blog || "Not available";
    document.getElementById("twitter").innerText = data.twitter_username || "Not available";
    
    const date = new Date(data.created_at);
    document.getElementById("joinDate").innerText = `Joined ${date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}`;
  }
  