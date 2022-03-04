export default class LineaTiempo {
  constructor() {
    this.contenedor = document.getElementById('lineasDeTiempo');
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    this.bloquesTiempo = 600;
    this.incrementosHoras = 4;
    this.margen = 20;
    this.totalTiempo = this.bloquesTiempo * this.incrementosHoras;
    this.contenedor.appendChild(this.svg);
    this.nodos = [];
    for (let i = 0; i < 10; i++) {
      this.nodos.push([]);
    }

    this.intentos = [];
    this.lineasIntentos = [];

    for (let i = 0; i < 10; i++) {
      const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
      this.lineasIntentos.push(poly);
      this.intentos[i] = [];
    }
  }

  pintar() {
    const dims = this.contenedor.getBoundingClientRect();
    this.ancho = dims.width | 0;
    this.alto = (window.innerHeight / 2) | 0;
    const margen = this.margen;
    const ancho = this.ancho;
    const alto = this.alto;
    this.svg.setAttribute('width', ancho);
    this.svg.setAttribute('height', alto);

    const lineaY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    lineaY.setAttribute('x1', margen);
    lineaY.setAttribute('y1', margen);
    lineaY.setAttribute('x2', margen);
    lineaY.setAttribute('y1', alto - margen);
    lineaY.setAttribute('stroke', 'white');
    lineaY.setAttribute('stroke-width', 1);

    const lineaX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    lineaX.setAttribute('x1', margen);
    lineaX.setAttribute('y1', alto - margen);
    lineaX.setAttribute('x2', ancho - margen);
    lineaX.setAttribute('y2', alto - margen);
    lineaX.setAttribute('stroke', 'white');
    lineaX.setAttribute('stroke-width', 1);

    this.marcasTiempo = this.bloquesTiempo / 6;
    this.pasoTiempo = ancho / this.marcasTiempo;

    for (let i = 0; i < this.bloquesTiempo; i++) {
      const x = i * this.pasoTiempo;
      const marca = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      marca.setAttribute('x1', margen + x);
      marca.setAttribute('y1', alto - margen - 10);
      marca.setAttribute('x2', margen + x);
      marca.setAttribute('y2', alto - margen + 10);
      marca.setAttribute('stroke', 'white');
      marca.setAttribute('stroke-width', 1);

      this.svg.appendChild(marca);
    }

    this.svg.appendChild(lineaY);
    this.svg.appendChild(lineaX);
  }

  agregarNodo(conteo, stateI, trialI) {
    const pasoTiempo = (this.ancho / this.totalTiempo) * 4;
    const nodos = this.nodos[trialI];
    const margen = this.margen;
    const alto = this.alto;
    const pasoY = 15;
    const linea = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    const x1 = nodos.length ? pasoTiempo * (nodos.length - 1) : 0;
    const y1 = nodos.length ? nodos[nodos.length - 1] * pasoY : conteo * pasoY;
    const y2 = conteo * pasoY;

    // const intento = this.intentos[trialI];
    // const px1 = margen + x1;
    // const py1 = alto - margen - y1;
    // const px2 = pasoTiempo * nodos.length + margen;
    // const py2 = alto - margen - y2;

    // intento.push(px1);
    // intento.push(py1);
    // intento.push(px2);
    // intento.push(py2);

    if (nodos.length) {
      linea.setAttribute('x1', margen + x1);
      linea.setAttribute('y1', alto - margen - y1);
      linea.setAttribute('x2', pasoTiempo * nodos.length + margen);
      linea.setAttribute('y2', alto - margen - y2);
    } else {
      linea.setAttribute('x1', margen);
      linea.setAttribute('y1', alto - margen);
      linea.setAttribute('x2', pasoTiempo + margen);
      linea.setAttribute('y2', alto - margen - y2);
    }

    linea.setAttribute('stroke', 'red');
    nodos.push(conteo);
    this.svg.appendChild(linea);
  }
}
