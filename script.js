'use strict';

const resultsContainer = document.querySelector('.results-container');
const button = document.querySelector('.button');
let charName = document.querySelector('.name');
let birthYear = document.querySelector('.birth-year');
let gender = document.querySelector('.gender');
let height = document.querySelector('.height');
let weight = document.querySelector('.weight');
let home = document.querySelector('.home-planet');

// fetch(baseUrl)
//   .then((response) => response.json())
//   .then((json) => {
//     console.log((person.innerHTML = `<h1> ${json.name}</h1>`));
//   });

async function randomCharacter() {
  let randomNumber = Math.floor(Math.random() * 83) + 1;
  console.log(randomNumber);
  const personUrl = `https://swapi.dev/api/people/${randomNumber}/`;

  try {
    const response = await fetch(personUrl);
    if (!response.ok) {
      alert('Site could not be reached');
    }
    const result = await response.json();
    const fetchPlanet = await fetch(`${result.homeworld}`);
    if (!fetchPlanet.ok) {
      alert('Site could not be reached');
    }
    const planetData = await fetchPlanet.json();
    let charGender =
      result.gender.charAt(0).toUpperCase() + result.gender.slice(1);

    charName.innerText = result.name;
    birthYear.innerHTML = `<span class="attribute"> Birth Year:</span> ${result.birth_year}`;
    gender.innerHTML = `<span class="attribute"> Gender: </span> ${charGender}`;
    height.innerHTML = `<span class="attribute"> Height: </span> ${result.height}`;
    weight.innerHTML = `<span class="attribute"> Weight: </span> ${result.mass}`;
    home.innerHTML = `<span class="attribute"> Home Planet: </span> ${planetData.name}`;
  } catch (error) {
    alert('there was an error fetching the data');
  }
}
