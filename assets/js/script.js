// const tableBody = document.getElementById('repo-table');
// const fetchButton = document.getElementById('fetch-button');
// const apiKey = 'AIzaSyCTYtNordj6SRPwinuAiE_m-PdKmVJBZQo';


// function getApi() {
//   // fetch request gets a list of all the repos for the node.js organization
//   const requestUrl = 'https://www.googleapis.com/auth/fitness.activity.read/users/dataSources/datasets';

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });

// }

// fetchButton.addEventListener('click', getApi);

async function fetchFitnessData(apiKey, accessToken) {
    const url = `https://www.googleapis.com/fitness/v1/users/me/dataSources`;
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`, // Include OAuth 2.0 token
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Fitness Data:', data);
      return data;
    } catch (error) {
      console.error('Error fetching fitness data:', error);
    }
  }
  
  // Usage example:
  const apiKey = 'AIzaSyCTYtNordj6SRPwinuAiE_m-PdKmVJBZQo'; 
  const accessToken = 'your-oauth-access-token'; // Must be obtained via the OAuth flow
  
  fetchFitnessData(apiKey, accessToken);
  
