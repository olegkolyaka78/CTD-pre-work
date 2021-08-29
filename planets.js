const buttonPlanets = document.querySelector("#buttonPlanets");
const rootElement = document.querySelector("#root");
const apiPlanets = "https://swapi.dev/api/planets";

async function fetchData(url) {
  try {
    showData("<h2>Loading...</h2>");
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
    showData("<h2>Something went wrong. Try again later.</h2>");
  }
}

function showData(result) {
  rootElement.innerHTML = `<ul>${result}</ul>`;
}

async function getPlanets() {
  const data = await fetchData(apiPlanets);
  const renderData = data
    .map(
      (el) =>
        `<li>Name: <span>${el.name}</span> Climate: <span>${el.climate}</span> Diameter: <span>${el.diameter}</span> Gravity: <span>${el.gravity}</span> Orbital Period: <span>${el.orbital_period}</span> Population: <span>${el.population}</span> Rotation Period: <span>${el.rotation_period}</span> terrain: <span>${el.terrain}</span></li>`
    )
    .join("");
  showData(renderData);
}

buttonPlanets.addEventListener("click", getPlanets);
getPlanets();
