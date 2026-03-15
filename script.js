import { apikey } from "./apikey.js"
const form = document.querySelector("#formValue");
let country = document.querySelector("#country");
let userInput = "";

const displayTimezone = document.querySelector("#display-timezone");
const displayTemp = document.querySelector("#display-temp");
const displayDescription = document.querySelector("#display-description");


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    userInput = country.value;
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userInput}?key=${apikey}`)
      .then(function(response) {
        console.log(response);
            return response.json();
      }) .then(function(data) {
        const cityData = data.timezone;
        const tempData = data.currentConditions.temp;
        const descData = data.description;
        const city = data.resolvedAddress;

        displayTimezone.textContent = `${cityData}`;
        displayTemp.textContent = `${tempData}°F`; 
        displayDescription.textContent = descData;
    })
      .catch(function(err) {
        displayTimezone.textContent = "Invalid City";
        displayTemp.textContent = `N/A`; 
        displayDescription.textContent = "The city you entered is invalid, please enter a valid city inorder to proceed!";
      });
})






