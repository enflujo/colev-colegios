export default class Porcentaje {
  constructor() {
    this.contenedor = document.getElementById('porcentajeSim');
    this.contador = this.contenedor.querySelector('.contador');
    this.total = 600 * 10;
    this.tick = 0;
  }

  actualizar() {
    ++this.tick;
    const porcentaje = (this.tick / this.total) * 100;
    this.contador.innerText = `${porcentaje.toFixed(1)}%`;
  }
}
