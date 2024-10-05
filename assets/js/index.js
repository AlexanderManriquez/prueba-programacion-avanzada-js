import { Aguila } from "./aguila.js";
import { Leon } from "./leon.js";
import { Lobo } from "./lobo.js";
import { Oso } from "./oso.js";
import { Serpiente } from "./serpiente.js";

const animales = {
  Aguila: "../assets/imgs/Aguila.png",
  Leon: "../assets/imgs/Leon.png",
  Lobo: "../assets/imgs/Lobo.jpg",
  Oso: "../assets/imgs/Oso.jpg",
  Serpiente: "../assets/imgs/Serpiente.jpg",
};

document.getElementById("btnRegistrar").addEventListener("click", async () => {
  const nombreAnimal = document.getElementById("animal").value;
  const edadAnimal = document.getElementById("edad").value;
  const comentarios = document.getElementById("comentarios").value;
  
  const imgSrc = await loadImage(animales[nombreAnimal]);

  let animal;
  if (nombreAnimal === "Aguila") {
    animal = new Aguila(nombreAnimal, edadAnimal, imgSrc, comentarios, "../assets/sounds/Chillido.mp3");
  } else if (nombreAnimal === "Leon") {
    animal = new Leon(nombreAnimal, edadAnimal, imgSrc, comentarios, "../assets/sounds/Rugido.mp3");
  } else if (nombreAnimal === "Lobo") {
    animal = new Lobo(nombreAnimal, edadAnimal, imgSrc, comentarios, "../assets/sounds/Aullido.mp3");
  } else if (nombreAnimal === "Oso") {
    animal = new Oso(nombreAnimal, edadAnimal, imgSrc, comentarios, "../assets/sounds/Grunido.mp3");
  } else if (nombreAnimal === "Serpiente") {
    animal = new Serpiente(nombreAnimal, edadAnimal, imgSrc, comentarios, "../assets/sounds/Siseo.mp3");
  }

  document.getElementById("preview").innerHTML = `
    <img src="${animal.img}" alt="${animal.nombre}" class="img-fluid preview-img">
  `;

  // Agregar el animal a la tabla de la izquierda (div #Animales)
  document.getElementById("Animales").innerHTML += `
    <div class="card m-2 p-2 bg-light text-dark" style="width: 10rem;">
      <img src="${animal.img}" class="card-img-top  animal-img" alt="${animal.nombre}" onclick="showDetails('${animal.nombre}', '${animal.edad}', '${animal._comentarios}', '${animal.img}')" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <div class="card-body">
        <button class="btn btn-dark" onclick="playSound('${animal.sonido}')">Reproducir Sonido</button>
      </div>
    </div>
  `;
});

async function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img.src);
    img.onerror = reject;
  });
}

window.playSound = function (sonido) {
  const player = document.getElementById("player");
  player.src = sonido;
  player.play();
};

window.showDetails = function (nombre, edad, comentarios, imgSrc) {
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = `
    <img src="${imgSrc}" class="img-fluid mb-3" alt="${nombre}">
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Edad:</strong> ${edad}</p>
    <p><strong>Comentarios:</strong> ${comentarios}</p>
  `;
};

