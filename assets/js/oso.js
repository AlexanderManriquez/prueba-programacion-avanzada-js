import { Animales } from './animales.js';

export class Oso extends Animales {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  grunir() {
    const player = document.getElementById("player");
    player.src = this.sonido;
    player.play();
  }
}
