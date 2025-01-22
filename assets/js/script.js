const tableBody = document.getElementById('repo-table');
const fetchButton = document.getElementById('fetch-button');
const apiKey = 'AIzaSyCTYtNordj6SRPwinuAiE_m-PdKmVJBZQo';


function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  const requestUrl = 'https://www.googleapis.com/auth/fitness.activity.read/users/dataSources/datasets';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });

}

fetchButton.addEventListener('click', getApi);
