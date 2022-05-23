const searchButton = document.querySelector('#submitButton');
const inputTextElement = document.querySelector('#athlete-search')
const ATHLETE = document.querySelector('#athlete')
const ATHLETE_TWO = document.querySelector('#athlete2')
const ATHLETE_THREE = document.querySelector('#athlete3')
const ATHLETE_FOUR = document.querySelector('#athlete4')
const ATHLETE_FIVE = document.querySelector('#athlete5')





const options = {
    method: 'GET',
    headers: {Accept: 'application/json', apikey: '2649776ef9ece4c391003b521cbfce7a'}
  };


async function getAthlete() {
    let ATHLETE_NAME = document.getElementById('athlete-search').value
    const response = await fetch(`https://api.triathlon.org/v1/athletes?name=${ATHLETE_NAME}`, options, {mode: 'cors'})
    const data = await response.json()
    console.log(data)
    ATHLETE.textContent = data.data[0].athlete_title + ', ' + data.data[0].athlete_age + ', ' + data.data[0].athlete_country_name
    ATHLETE_TWO.textContent = data.data[1].athlete_title + ', ' + data.data[1].athlete_age + ', ' + data.data[1].athlete_country_name
    ATHLETE_THREE.textContent = data.data[2].athlete_title + ', ' + data.data[2].athlete_age + ', ' + data.data[2].athlete_country_name
    ATHLETE_FOUR.textContent = data.data[3].athlete_title + ', ' + data.data[3].athlete_age + ', ' + data.data[3].athlete_country_name
    ATHLETE_FIVE.textContent = data.data[4].athlete_title + ', ' + data.data[4].athlete_age + ', ' + data.data[4].athlete_country_name
}


        
searchButton.addEventListener('click', function(){
    event.preventDefault();
    getAthlete()
});