export default class LineaTiempo {
  constructor(poblaciones, colorsPoblaciones) {
    this.contenedor = document.getElementById('lineasDeTiempo');
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    this.bloquesTiempo = 600;
    this.incrementosHoras = 4;
    this.margen = 20;
    this.barMargen = 4;
    this.totalTiempo = this.bloquesTiempo * this.incrementosHoras;
    this.contenedor.appendChild(this.svg);

    this.nodos = [];
    for (let i1 = 0; i1 < 10; i1++) {
      this.nodos.push([]);
      for (let i2 = 0; i2 < 600; i2++) {
        this.nodos[i1].push({});
      }
    }

    this.trialI = 1;
    this.stateI = 1;
    this.TrialContador = this.contenedor.querySelector('.TrialContador');

    this.intentos = [];
    this.lineasIntentos = [];

    for (let i = 0; i < 10; i++) {
      const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
      this.lineasIntentos.push(poly);
      this.intentos[i] = [];
    }

    this.poblaciones = poblaciones;
    this.barrasPoblaciones = [];
    this.barrasContagiados = [];
    this.barrasRecuperado = [];
    poblaciones.forEach((nombre, i) => {
      if (i != 4) {
        var polygon1 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        var polygon2 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        var polygon3 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");

        polygon1.setAttribute('style', `fill:${colorsPoblaciones[i]};stroke:none;`);
        polygon2.setAttribute('style', `fill:#902c44;stroke:none;`);
        polygon3.setAttribute('style', `fill:#527b59;stroke:none;`);
        
        this.barrasPoblaciones.push(polygon1);
        this.svg.appendChild(polygon1);
        this.barrasRecuperado.push(polygon3);
        this.svg.appendChild(polygon3);
        this.barrasContagiados.push(polygon2);
        this.svg.appendChild(polygon2);
      }
    })

    this.modo = 0; // 0: contagious probability for each population, 1: current rate of infected & recuperado
    this.botonProbabilidad = document.getElementById('probabilidadContagio');
    this.botonEstado = document.getElementById('estadoActual');
  }

  establecerModo(modo){
    const nodo = this.nodos[this.trialI];
    const margen = this.margen;
    const barMargen = this.barMargen;
    const alto = this.alto;
    const barAlto = this.barAlto;
    const barDistancia = this.barDistancia;
    const pasoTiempo = (this.ancho - margen * 2 - barMargen * 2) / this.bloquesTiempo;

    if (modo == 0) {
      this.botonProbabilidad.setAttribute('style', 'text-decoration: underline;background-color: white;color:black;');
      this.botonEstado.setAttribute('style', 'cursor: pointer;');
    }
    else if (modo == 1) {
      this.botonProbabilidad.setAttribute('style', 'cursor: pointer;');
      this.botonEstado.setAttribute('style', 'text-decoration: underline;background-color: white;color:black;');
    }
    else {
      throw new Error("Unknown Mode");
    }
    
    this.modo = modo;

    this.poblaciones.forEach((nombre, i1) => {
      if (i1 != 4){
        const y1 = alto - margen - (3 - i1) * (barDistancia + barAlto);

        var ptsContagiados = [`${margen+barMargen},${y1}`];
        var ptsRecuperado = [`${margen+barMargen},${y1}`];

        for (let i2 = 0; i2 < this.stateI - 1; i2++){
          const v = nodo[i2][nombre];
          const x = pasoTiempo * (i2 + 1);
          const y_probabilidad = y1 - barAlto * v[0];
          const y_infectado = y1 - barAlto * v[2];
          const y_recuperado = y_infectado - barAlto * v[1];

          var y2 = 0;
          var y3 = 0;
          if (this.modo == 0){
            y2 = y_probabilidad;
            y3 = y_probabilidad;
          }
          else {
            y2 = y_infectado;
            y3 = y_recuperado;
          }

          if (i2 == 0){
            ptsContagiados.push(`${margen+barMargen},${y2}`);
            ptsRecuperado.push(`${margen+barMargen},${y3}`);
          }
          
          ptsContagiados.push(`${margen + barMargen + x},${y2}`);
          ptsRecuperado.push(`${margen + barMargen + x},${y3}`);

          if (i2 == this.stateI - 2) {
            ptsContagiados.push(`${margen + barMargen + x},${y1}`);
            ptsRecuperado.push(`${margen + barMargen + x},${y1}`);
          }
          
        }
      
        var pointListC = '';
        var pointListR = '';
        for (let value of ptsContagiados) {
          pointListC = pointListC.concat(`${value} `);
        }
        for (let value of ptsRecuperado) {
          pointListR = pointListR.concat(`${value} `);
        }
        
        this.barrasContagiados[i1].setAttribute('points', pointListC.substring(0,pointListC.length-1));
        this.barrasContagiados[i1].setAttribute('pathLength', `${ptsContagiados.length}`);
        this.barrasRecuperado[i1].setAttribute('points', pointListR.substring(0,pointListR.length-1));
        this.barrasRecuperado[i1].setAttribute('pathLength', `${ptsRecuperado.length}`);
      }
    });
  }

  pintar() {
    const dims = this.contenedor.getBoundingClientRect();
    this.ancho = dims.width | 0;
    this.alto = (window.innerHeight / 1.6) | 0;
    this.barAlto = this.alto / 6;
    this.barDistancia = this.barAlto / 3;
    const margen = this.margen;
    const barMargen = this.barMargen;
    const ancho = this.ancho;
    const alto = this.alto;
    this.svg.setAttribute('width', ancho);
    this.svg.setAttribute('height', alto);

    const lineaIzquierda = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    lineaIzquierda.setAttribute('x1', margen);
    lineaIzquierda.setAttribute('y1', margen);
    lineaIzquierda.setAttribute('x2', margen);
    lineaIzquierda.setAttribute('y2', alto - margen);
    lineaIzquierda.setAttribute('stroke', 'white');
    lineaIzquierda.setAttribute('stroke-width', 1);

    const lineaCorrecta = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    lineaCorrecta.setAttribute('x1', ancho - margen);
    lineaCorrecta.setAttribute('y1', margen);
    lineaCorrecta.setAttribute('x2', ancho - margen);
    lineaCorrecta.setAttribute('y2', alto - margen);
    lineaCorrecta.setAttribute('stroke', 'white');
    lineaCorrecta.setAttribute('stroke-width', 1);

    this.svg.appendChild(lineaIzquierda);
    this.svg.appendChild(lineaCorrecta);

    this.barrasContagiados.forEach((polygon, i) => {
      polygon.setAttribute('points', '0,0 0,0');
      polygon.setAttribute('pathLength', '2');
    });
    this.barrasRecuperado.forEach((polygon, i) => {
      polygon.setAttribute('points', '0,0 0,0');
      polygon.setAttribute('pathLength', '2');
    });
    
    this.establecerModo(0);
    /*

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
    */
  }

  actualizar(conteoPoblaciones, estadoActual, poblaciones, stateI, trialI) {
    const nodos = this.nodos[trialI];
    const margen = this.margen;
    const barMargen = this.barMargen;
    const alto = this.alto;
    const barAlto = this.barAlto;
    const barDistancia = this.barDistancia;
    const pasoTiempo = (this.ancho - margen * 2 - barMargen * 2) / this.bloquesTiempo; // (this.ancho / this.totalTiempo) * 4;
    const x1 = pasoTiempo * stateI;

    this.trialI = trialI;
    this.stateI = stateI;
    this.TrialContador.innerHTML = `${trialI + 1}`;

    // ~~~~~~~~~~~
    poblaciones.forEach((nombre, i) => {
      if (i != 4) {
        nodos[stateI - 1][nombre] = [conteoPoblaciones[nombre], estadoActual[nombre][0], estadoActual[nombre][1]];

        const y1 = alto - margen - (3 - i) * (barDistancia + barAlto);
        const y_probabilidad = y1 - barAlto * conteoPoblaciones[nombre];
        const y_infectado = y1 - barAlto * estadoActual[nombre][1];
        const y_recuperado = y_infectado - barAlto * estadoActual[nombre][0];

        var y2 = 0;
        var y3 = 0;
        if (this.modo == 0){
          y2 = y_probabilidad;
          y3 = y_probabilidad;
        }
        else {
          y2 = y_infectado;
          y3 = y_recuperado;
        }

        // barPoblaciones
        var ptsPoblaciones = [ [ margen + barMargen + x1,
                          y1 ], // 
                    [ margen + barMargen,
                          y1 ], 
                    [ margen + barMargen,
                          y1 - barAlto ],
                    [ margen + barMargen + x1, 
                          y1 - barAlto]];
    
        var pointList = '';
        for (let value of ptsPoblaciones) {
          pointList = pointList.concat(`${value[0]},${value[1]} `);
        }
        this.barrasPoblaciones[i].setAttribute('points', pointList.substring(0,pointList.length-1));

        // barContagiados & barRecuperado
        var ptsContagiados = this.barrasContagiados[i].getAttribute('points').split(' ');
        var ptsRecuperado = this.barrasRecuperado[i].getAttribute('points').split(' ');

        if (stateI == 1) {
          // reiniciar barras
          ptsContagiados = `${margen+barMargen},${y1} ${margen+barMargen},${y2} 0,0`.split(' ');
          ptsRecuperado = `${margen+barMargen},${y1} ${margen+barMargen},${y3} 0,0`.split(' ');
        }

        ptsContagiados[ptsContagiados.length - 1] = `${margen + barMargen + x1},${y2}`;
        ptsContagiados.push(`${margen + barMargen + x1},${y1}`);
        ptsRecuperado[ptsRecuperado.length - 1] = `${margen + barMargen + x1},${y3}`;
        ptsRecuperado.push(`${margen + barMargen + x1},${y1}`);

        var pointListC = '';
        var pointListR = '';
        for (let value of ptsContagiados) {
          pointListC = pointListC.concat(`${value} `);
        }
        for (let value of ptsRecuperado) {
          pointListR = pointListR.concat(`${value} `);
        }

        this.barrasContagiados[i].setAttribute('points', pointListC.substring(0,pointListC.length-1));
        this.barrasContagiados[i].setAttribute('pathLength', `${ptsContagiados.length}`);
        this.barrasRecuperado[i].setAttribute('points', pointListR.substring(0,pointListR.length-1));
        this.barrasRecuperado[i].setAttribute('pathLength', `${ptsRecuperado.length}`);
      }
    })


    // const intento = this.intentos[trialI];
    // const px1 = margen + x1;
    // const py1 = alto - margen - y1;
    // const px2 = pasoTiempo * nodos.length + margen;
    // const py2 = alto - margen - y2;

    // intento.push(px1);
    // intento.push(py1);
    // intento.push(px2);
    // intento.push(py2);

    /*
    if (nodos.length) {
      linea.setAttribute('x1', margen + barMargen + x1);
      linea.setAttribute('y1', alto - margen - y1);
      linea.setAttribute('x2', pasoTiempo * nodos.length + margen + barMargen);
      linea.setAttribute('y2', alto - margen - y2);
    } else {
      linea.setAttribute('x1', margen + barMargen);
      linea.setAttribute('y1', alto - margen);
      linea.setAttribute('x2', pasoTiempo + margen + barMargen);
      linea.setAttribute('y2', alto - margen - y2);
    }

    linea.setAttribute('stroke', 'red');
    this.svg.appendChild(linea);
    */
  }
}
