import { Animales } from './animales.js';

export class Lobo extends Animales {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  aullar() {
    const player = document.getElementById("player");
    player.src = this.sonido;
    player.play();
  }
}
