"use strict";

const urlApi = "https://rickandmortyapi.com/api/character";

// función principal que muestra la data (fetch)

function getData() {
  fetch(urlApi)
    .then((data) => {
      return data.json();
    })
    .then((data) => showCharacters(data.results))
    .catch((err) => {
      console.log(err);
    });
}

// Función para cargar a los personajes en cards

function showCharacters(character) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  character.forEach((element) => {
    const characterDiv = document.createElement("div");
    characterDiv.classList.add("character");

    const characterName = document.createElement("h4");
    characterName.textContent = `${element.name}`;

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const characterImg = document.createElement("img");
    characterImg.classList.add("imgs");
    characterImg.src = element.image;
    characterImg.alt = `Image ${element.name}`;

    imgContainer.appendChild(characterImg);

    characterDiv.appendChild(characterName);
    characterDiv.appendChild(imgContainer);

    container.appendChild(characterDiv);
  });
}

// llamado a la función principal

getData();
