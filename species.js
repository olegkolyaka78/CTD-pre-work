const buttonSpecies = document.querySelector("#buttonSpecies");
const rootElement = document.querySelector("#root");
const apiSpecies = "https://swapi.dev/api/species";

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

async function getSpecies() {
  const data = await fetchData(apiSpecies);
  const renderData = data
    .map(
      (el) =>
        `<li>Name: <span>${el.name}</span> Classification: <span>${el.classification}</span> Eye Colors: <span>${el.eye_colors}</span> Hair Colors: <span>${el.hair_colors}</span> Skin Colors: <span>${el.hair_colors}</li>`
    )
    .join("");
  showData(renderData);
}

buttonSpecies.addEventListener("click", getSpecies);
getSpecies();
