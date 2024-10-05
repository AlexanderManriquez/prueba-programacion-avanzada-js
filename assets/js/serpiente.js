// leon.js
import { Animales } from './animales.js';

export class Serpiente extends Animales {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  sisear() {
    const player = document.getElementById("player");
    player.src = this.sonido;
    player.play();
  }
}
