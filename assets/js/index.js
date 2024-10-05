import { Aguila } from "./aguila.js";
import { Leon } from "./leon.js";
import { Lobo } from "./lobo.js";
import { Oso } from "./oso.js";
import { Serpiente } from "./serpiente.js";

document.getElementById("btnRegistrar").addEventListener("click", () => {
  const nombreAnimal = document.getElementById("animal").value;
  const edadAnimal = document.getElementById("edad").value;
  const comentarios = document.getElementById("comentarios").value;
  let animal;

  // Crear instancia según el animal seleccionado
  if (nombreAnimal === "Aguila") {
    animal = new Aguila(
      nombreAnimal,
      edadAnimal,
      "../assets/imgs/Aguila.png",
      comentarios,
      "../assets/sounds/Chillido.mp3"
    );
  } else if (nombreAnimal === "Leon") {
    animal = new Leon(
      nombreAnimal,
      edadAnimal,
      "../assets/imgs/Leon.png",
      comentarios,
      "../assets/sounds/Rugido.mp3"
    );
  } else if (nombreAnimal === "Lobo") {
    animal = new Lobo(
      nombreAnimal,
      edadAnimal,
      "../assets/imgs/Lobo.jpg",
      comentarios,
      "../assets/sounds/Aullido.mp3"
    );
  } else if (nombreAnimal === "Oso") {
    animal = new Oso(
      nombreAnimal,
      edadAnimal,
      "../assets/imgs/Oso.jpg",
      comentarios,
      "../assets/sounds/Grunido.mp3"
    );
  } else if (nombreAnimal === "Serpiente") {
    animal = new Serpiente(
      nombreAnimal,
      edadAnimal,
      "../assets/imgs/Serpiente.jpg",
      comentarios,
      "../assets/sounds/Siseo.mp3"
    );
  }

  document.getElementById("preview").innerHTML = `
    <img src="${animal.img}" alt="${animal.nombre}" class="img-fluid preview-img">
  `;

  // Agregar el animal a la tabla de la izquierda (div #Animales)
  document.getElementById("Animales").innerHTML += `
    <div class="card m-2 p-2 bg-light text-dark" style="width: 10rem;">
      <img src="${animal.img}" class="card-img-top animal-img" alt="${animal.nombre}" onclick="showDetails('${animal.nombre}', '${animal.edad}', '${animal._comentarios}', '${animal.img}')" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <div class="card-body">
        <button class="btn btn-dark" onclick="playSound('${animal.sonido}')">Reproducir Sonido</button>
      </div>
    </div>
  `;
});

window.playSound = function (sonido) {
  const player = document.getElementById("player");
  player.src = sonido;
  player.play();
};

window.showDetails = function (nombre, edad, comentarios, imgSrc) {
    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = `
      <div class="d-flex flex-column align-items-center text-center">
        <img src="${imgSrc}" class="img-fluid mb-3" alt="${nombre}" style="max-width: 100%;">
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Comentarios:</strong> ${comentarios}</p>
      </div>
    `;
};

