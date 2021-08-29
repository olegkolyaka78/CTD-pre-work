const buttonFilms = document.querySelector("#buttonFilms");
const rootElement = document.querySelector("#root");
const apiFilms = "https://swapi.dev/api/films";

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

async function getFilms() {
  const data = await fetchData(apiFilms);
  const renderData = data
    .map(
      (el) =>
        `<li>Title: <span>${el.title}</span> Episode: <span>${el.episode_id}</span> Director: <span>${el.director}</span> Producer: <span>${el.producer}</span> Release Date: <span>${el.release_date}</span></li>`
    )
    .join("");
  showData(renderData);
}

buttonFilms.addEventListener("click", getFilms);
getFilms();
