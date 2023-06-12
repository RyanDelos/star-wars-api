'use strict';

const resultsContainer = document.querySelector('.results-container');
const button = document.querySelector('.button');
let charName = document.querySelector('.name');
let birthYear = document.querySelector('.birth-year');
let gender = document.querySelector('.gender');
let height = document.querySelector('.height');
let weight = document.querySelector('.weight');
let hair = document.querySelector('.hair-color');
let eyeColor = document.querySelector('.eye-color');
let skin = document.querySelector('.skin-color');
let home = document.querySelector('.home-planet');
let year = document.querySelector('.year');
let currentYear = new Date().getFullYear();

async function generateCharacter() {
  let randomNumber = Math.floor(Math.random() * 83) + 1;
  console.log(randomNumber);
  const personUrl = `https://swapi.dev/api/people/${randomNumber}/`;

  try {
    const response = await fetch(personUrl);
    if (!response.ok) {
      alert('Site could not be reached');
    }
    const result = await response.json();
    const planetName = await getPlanet(result.homeworld);
    let charGender =
      result.gender.charAt(0).toUpperCase() + result.gender.slice(1);

    charName.innerText = result.name;
    birthYear.innerHTML = `<span class="attribute"> Birth Year:</span> ${result.birth_year}`;
    gender.innerHTML = `<span class="attribute"> Gender: </span> ${charGender}`;
    height.innerHTML = `<span class="attribute"> Height: </span> ${result.height} cm`;
    weight.innerHTML = `<span class="attribute"> Mass: </span> ${result.mass} kg`;
    hair.innerHTML = `<span class="attribute"> Hair: </span> ${result.hair_color}`;
    eyeColor.innerHTML = `<span class="attribute"> Eyes: </span> ${result.eye_color}`;
    skin.innerHTML = `<span class="attribute"> Skin: </span> ${result.skin_color}`;
    return planetName;
  } catch (error) {
    alert('there was an error fetching the data');
  }
}

async function getPlanet(planetUrl) {
  try {
    const fetchPlanet = await fetch(`${planetUrl}`);
    if (!fetchPlanet.ok) {
      alert('Site could not be reached');
    }
    const planetData = await fetchPlanet.json();
    console.log(planetData.name);
    home.innerHTML = `<span class="attribute"> Home Planet: </span> ${planetData.name}`;
  } catch (error) {
    alert('there was an error fetching the data');
  }
}

year.textContent = currentYear;
