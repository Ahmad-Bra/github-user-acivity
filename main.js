const args = process.argv.slice(2);

function fetchData(user) {
  try {
    fetch(`https://api.github.com/users/${user}/events`)
      .then((response) => response.json())
      .then((data) => {
        const events = data.slice(0, 5); // Get the latest 5 events

        events.forEach((event) => {
          console.log(
            `Type: ${event.type}, Repo: ${event.repo.name}, Created at: ${event.created_at}`
          );
        });
      })
      .catch((error) =>
        console.error("Error fetching GitHub activity:", error)
      );
  } catch (error) {
    console.log("An unexpected error occurred:", error);
  }
}

if (args[0] === "github-activity" && args[1]) {
  fetchData(args[1]);
}

// Example usage: node main.js github-activity octocat
