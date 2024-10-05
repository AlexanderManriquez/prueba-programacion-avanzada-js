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
      animal = new Leon(nombreAnimal, edadAnimal, '../assets/imgs/Aguila.png', comentarios, '../assets/sounds/Chillido.mp3');
    } else if (nombreAnimal === "Leon") {
        animal = new Oso(nombreAnimal, edadAnimal, '../assets/imgs/Leon.png', comentarios, '../assets/sounds/Rugido.mp3')
    }else if (nombreAnimal === "Lobo") {
      animal = new Lobo(nombreAnimal, edadAnimal, '../assets/imgs/Lobo.jpg', comentarios, '../assets/sounds/Aullido.mp3');
    } else if (nombreAnimal === "Oso") {
        animal = new Oso(nombreAnimal, edadAnimal, '../assets/imgs/Oso.jpg', comentarios, '../assets/sounds/Grunido.mp3')
    } else if (nombreAnimal === "Serpiente") {
        animal = new Oso(nombreAnimal, edadAnimal, '../assets/imgs/Serpiente.jpg', comentarios, '../assets/sounds/Siseo.mp3')
    }
    // Repetir para otros animales...
  
    // Muestra en el div de previsualización o agrega a la lista de animales
    document.getElementById("preview").innerHTML = `
      <img src="${animal.img}" alt="${animal.nombre}">
      <p>Nombre: ${animal.nombre}</p>
      <p>Edad: ${animal.edad}</p>
      <p>Comentarios: ${animal._comentarios}</p>
    `;
  });