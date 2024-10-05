// leon.js
import { Animales } from './animales.js';

export class Aguila extends Animales {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  chillar() {
    const player = document.getElementById("player");
    player.src = this.sonido;
    player.play();
  }
}
