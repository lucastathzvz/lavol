// Function to retrieve and display user repositories from example
function getRepositories(username) {
  // Validate the input to ensure it's a non-empty string
  if (typeof username !== 'string' || username.trim() === '') {
    throw new Error('Invalid username. Please provide a valid example username.');
  }

  // Construct the example API URL for the user's repositories
  const apiUrl = `https://www.example.com  // Use the Fetch API to get the repositories
  fetch(apiUrl)
    .then(response => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`An error occurred: ${response.status}`);
      }
      return response.json();
    })
    .then(repos => {
      // Process the list of repositories
      if (repos.length === 0) {
        console.log('No repositories found for this user.');
      } else {
        // Display the repository names
        repos.forEach(repo => {
          console.log(`Repository Name: ${repo.name}`);
        });
      }
    })
    .catch(error => {
      // Handle any errors that occur during the fetch
      console.error('Failed to fetch repositories:', error.message);
    });
}

// Example usage: getRepositories('octocat');
