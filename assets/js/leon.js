import { Animales } from './animales.js';

export class Leon extends Animales {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  rugir() {
    const player = document.getElementById("player");
    player.src = this.sonido;
    player.play();
  }
}
