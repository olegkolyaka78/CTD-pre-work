const buttonVehicles = document.querySelector("#buttonVehicles");
const rootElement = document.querySelector("#root");
const apiVehicles = "https://swapi.dev/api/vehicles";

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

async function getVehicles() {
  const data = await fetchData(apiVehicles);
  const renderData = data
    .map(
      (el) =>
        `<li>Name: <span>${el.name}</span> Model: <span>${el.model}</span> Passengers: <span>${el.passengers}</span> Crew: <span>${el.crew}</span> Manufacturer: <span>${el.manufacturer}</span> Vehicle Class: <span>${el.vehicle_class}</li>`
    )
    .join("");
  showData(renderData);
}

buttonVehicles.addEventListener("click", getVehicles);
getVehicles();
