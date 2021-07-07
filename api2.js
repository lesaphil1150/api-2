let baseURL = "https://api.giphy.com/v1/gifs/search";
let key = "LdBr430lE0N08WXNOghmOwHR0MO3lHAI";
let url;

let searchTerm = document.querySelector(".search");
let searchForm = document.querySelector("form");
let submitBtn = document.querySelector(".submit");
let section = document.querySelector("section");

searchForm.addEventListener("submit", fetchResults);

function fetchResults(e) {
  e.preventDefault();
  url = `${baseURL}?api_key=${key}&q=${searchTerm.value}`;
  //   console.log(url);

  fetch(url)
    .then(function (result) {
      //   console.log(result);
      return result.json();
    })
    .then(function (json) {
      console.log(json);
      let results = json.data;
      displayResults(results);
    });

  function displayResults(jsonResults) {
    while (section.firstChild) {
      section.removeChild(section.firstChild);
    }
    for (let i = 0; i < jsonResults.length; i++) {
      //   console.log(jsonResults[i].url);
      let picture = document.createElement("iframe");
      picture.src = jsonResults[i].embed_url;
      picture.style.height = "30vh";
      section.appendChild(picture);
    }
  }
}
