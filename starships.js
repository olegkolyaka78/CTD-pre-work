const buttonStarships = document.querySelector("#buttonStarships");
const rootElement = document.querySelector("#root");
const apiStarships = "https://swapi.dev/api/starships";


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

async function getStarships() {
  const data = await fetchData(apiStarships);
  const renderData = data
    .map(
      (el) =>
        `<li>Name: <span>${el.name}</span> Model: <span>${el.model}</span> Passengers: <span>${el.passengers}</span> Crew: <span>${el.crew}</span> Manufacturer: <span>${el.manufacturer}</span> Starship Class: <span>${el.starship_class}</li>`
    )
    .join("");
  showData(renderData);
}

buttonStarships.addEventListener("click", getStarships);
getStarships();