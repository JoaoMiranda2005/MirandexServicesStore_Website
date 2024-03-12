document.addEventListener("DOMContentLoaded", () => {
  const repoContainer = document.querySelector(".containerrepos");

  fetch("https://api.github.com/users/JoaoMiranda2005/repos")
    .then((response) => response.json())
    .then((data) => {
      // Sort repositories by creation date in descending order
      data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

      // Render sorted repositories
      data.forEach((repo) => {
        const repoItem = document.createElement("div");
        repoItem.classList.add("repo-item");
        repoItem.innerHTML = `
            <h4>${repo.name}</h4>
            <p>${repo.description || "No description"}</p>
            <a href="${repo.html_url}" target="_blank">View Repo</a>
          `;
        repoContainer.appendChild(repoItem);
      });
    })
    .catch((error) => console.error("Error fetching repositories:", error));
});

var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
