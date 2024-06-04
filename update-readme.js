const fs = require("fs");
const axios = require("axios");

async function fetchData() {
  try {
    // Fetch data from GitHub API
    const response = await axios.get(
      "https://api.github.com/users/Sanni-Damilola"
    );
    const userData = response.data;

    const readmeContent = `
## Hello, I'm ${userData.name}! 👋

🌟 I have ${userData.followers} followers on GitHub.

You can reach out to me at [sannifortune11@gmail.com](mailto:sannifortune11@gmail.com).
`;

    // Write updated content to README file
    fs.writeFileSync("README.md", readmeContent);
    console.log("README updated successfully!");
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

fetchData();
