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

// Función autoejecutable (IIFE) para manejar la interacción del formulario
(function () {
    document.getElementById("btnRegistrar").addEventListener("click", async () => {
        const nombreAnimal = document.getElementById("animal").value;
        const edadAnimal = document.getElementById("edad").value;
        const comentarios = document.getElementById("comentarios").value;

        // Validación de formulario completo antes de agregar un elemento
        if (!nombreAnimal || !edadAnimal || !comentarios.trim()) {
            alert("Por favor, complete todos los campos antes de registrar el animal.");
            return;
        }

        const imgSrc = await loadImage(animales[nombreAnimal]);

            let animal;
            if (nombreAnimal === "Aguila") {
                animal = new Aguila(nombreAnimal, edadAnimal, imgSrc, comentarios);
            } else if (nombreAnimal === "Leon") {
                animal = new Leon(nombreAnimal, edadAnimal, imgSrc, comentarios);
            } else if (nombreAnimal === "Lobo") {
                animal = new Lobo(nombreAnimal, edadAnimal, imgSrc, comentarios);
            } else if (nombreAnimal === "Oso") {
                animal = new Oso(nombreAnimal, edadAnimal, imgSrc, comentarios);
            } else if (nombreAnimal === "Serpiente") {
                animal = new Serpiente(nombreAnimal, edadAnimal, imgSrc, comentarios);
            }

        // Mostrar vista previa de imagen
        document.getElementById("preview").innerHTML = `
      <img src="${animal.img}" alt="${animal.nombre}" class="img-fluid preview-img">
    `;

        // Utilización de setTimeout, para mostrar la imagen en preview y luego agregar elemento a la tabla
        setTimeout(() => {
            document.getElementById("Animales").innerHTML += `
      <div class="card m-2 p-2 bg-light text-dark" style="width: 10rem;">
        <img src="${animal.img}" class="card-img-top animal-img" alt="${animal.nombre}" onclick="showDetails('${animal.nombre}', '${animal.edad}', '${animal._comentarios}', '${animal.img}')" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div class="card-body">
          <button class="btn btn-dark" onclick="playSound('${nombreAnimal}')">&#128364;</button>
        </div>
      </div>
    `;
            resetForm();
        }, 2000);
    });

    // Función para restablecer el formulario a su estado inicial
    function resetForm() {
        document.getElementById("animal").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("comentarios").value = "";
        document.getElementById("preview").innerHTML = "";
    }
}) ();

// Función para cargar la imagen
async function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img.src);
        img.onerror = reject;
    });
}

// Función para reproducir sonido
window.playSound = (nombreAnimal) => {
    let sonido;
    if (nombreAnimal === "Aguila") {
        sonido = new Audio("../assets/sounds/Chillido.mp3");
    } else if (nombreAnimal === "Leon") {
        sonido = new Audio("../assets/sounds/Rugido.mp3");
    } else if (nombreAnimal === "Lobo") {
        sonido = new Audio("../assets/sounds/Aullido.mp3");
    } else if (nombreAnimal === "Oso") {
        sonido = new Audio("../assets/sounds/Grunido.mp3");
    } else if (nombreAnimal === "Serpiente") {
        sonido = new Audio("../assets/sounds/Siseo.mp3");
    } else {
        console.error("Sonido no encontrado para el animal.");
        return;
    }
    sonido.play();
};


window.showDetails = (nombre, edad, comentarios, imgSrc) => {
    console.log(`Detalles: Nombre: ${nombre}, Edad: ${edad}, Comentarios: ${comentarios}, Imagen: ${imgSrc}`);
    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = `
    <img src="${imgSrc}" class="img-fluid mb-3" alt="${nombre}">
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Edad:</strong> ${edad}</p>
    <p><strong>Comentarios:</strong> ${comentarios}</p>
  `;
};
