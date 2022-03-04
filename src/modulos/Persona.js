export default class Persona {
  constructor(contenedor, id, poblacion, angulo) {
    this.id = id;
    this.poblacion = poblacion;
    this.angulo = angulo;

    const x = (200 * Math.cos(this.angulo)) | 0;
    const y = (200 * Math.sin(this.angulo)) | 0;
    let nodo = document.createElement('span');
    nodo.className = `persona ${poblacion}`;
    Object.assign(nodo.style, {
      top: `${y + 300}px`,
      left: `${x + 300}px`,
      // transform: `rotate(${angulo * 360}deg)`,
    });

    contenedor.appendChild(nodo);
    this.nodo = nodo;
  }

  actualizarEstado(estado, radio) {
    const nodo = this.nodo;
    const x = (radio * Math.cos(this.angulo)) | 0;
    const y = (radio * Math.sin(this.angulo)) | 0;
    Object.assign(nodo.style, {
      top: `${y + 300}px`,
      left: `${x + 300}px`,
    });
  }
}
