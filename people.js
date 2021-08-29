const buttonPeople = document.querySelector("#buttonPeople");
const rootElement = document.querySelector("#root");
const apiPeople = "https://swapi.dev/api/people";

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

async function getPeople() {
  const data = await fetchData(apiPeople);
  const renderData = data
    .map(
      (el) =>
        `<li>Name: <span>${el.name}</span> Birth Year: <span>${el.birth_year}</span> Gender: <span>${el.gender}</span> Hair Color: <span>${el.hair_color}</span> Skin Color: <span>${el.hair_color}</span> Height: <span>${el.height}</span> Mass: <span>${el.mass}</span></li>`
    )
    .join("");
  showData(renderData);
}

buttonPeople.addEventListener("click", getPeople);
getPeople();