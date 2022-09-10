import Persona from './Persona';
import { PI_DOS, estados, margenTodos } from '../utilidades/constantes';
import LineaTiempo from './LineaTiempo';
export default class {
  constructor() {
    this.nodos = {};
    this.personas = [];
    this.contenedor = document.getElementById('todos');
    this.probabilidad = document.getElementById('contagio');
    this.radios = [200, 170, 135, 95, 50, 10, 240];
    this.colores = [];
    this.poblaciones = ['highschool', 'preschool', 'primary', 'work', 'other'];
    this.estados = estados;

    this.coloresEstado = [
      '#F9D423', // susceptible
      '#FECEAB', // expuestos
      '#FF847C', // moderado
      '#E84A5F', // severo
      '#EC2049', // crítico
      '#13191b', // fallecido
      '#99B898', // recuperado
    ];

    this.colorsPoblaciones = [
      '#67b2c4', // highschool
      '#ebcb16', // preschool
      '#04aa6d', // primary
      'rgba(219, 182, 133, 1)', // work
      'rgb(151, 151, 151)', // others
    ];

    this.contagiados = [];
    this.contagiadosPoblaciones = {};
    this.totalContagiados = 0;

    for (let i = 0; i < 200; i++) {
      this.contagiados.push(0);
    }

    this.linea = new LineaTiempo();
    this.pintarAnillos();
  }

  pintarAnillos() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', margenTodos * 2);
    svg.setAttribute('height', margenTodos * 2);
    svg.style.opacity = 0.5;

    this.estados.forEach((estado, i) => {
      const color = this.coloresEstado[i];
      const r = this.radios[i];
      const anillo = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      anillo.setAttribute('cx', margenTodos + 2.5);
      anillo.setAttribute('cy', margenTodos + 2.5);
      anillo.setAttribute('r', r);

      if (estado === 'fallecido') {
        anillo.setAttribute('fill', color);
      } else {
        anillo.setAttribute('stroke', color);
        anillo.setAttribute('strokeWidth', 2);
        anillo.setAttribute('fill', 'transparent');
      }
      svg.appendChild(anillo);
    });

    this.contenedor.appendChild(svg);
  }

  sumarEstado(mensaje) {
    const datos = mensaje.datos;

    datos.forEach((estado, i) => {
      if (estado === 2) {
        // por poblaciones
        this.poblaciones.forEach((nombre) => {
          const nodo = this.nodos[nombre][0];

          if (nodo.includes(i)) {
            const j = nodo.indexOf(i);
            this.contagiadosPoblaciones[nombre][j] = 1;
          }

          let suma = 0;
          for (let i = 0; i < this.contagiadosPoblaciones[nombre].length; i++) {
            suma += this.contagiadosPoblaciones[nombre][i];
          }

          const contenedor = document.getElementById(nombre);
          const conteo = contenedor.querySelector('.contador');
          conteo.innerText = `${((suma / 200) * 100).toFixed(1)}%`;
        });

        //
        if (!this.nodos.other[0].includes(i)) {
          this.contagiados[i] = 1;
          let suma = 0;
          for (let i = 0; i < this.contagiados.length; i++) {
            suma += this.contagiados[i];
          }

          this.probabilidad.innerText = `${((suma / 200) * 100).toFixed(1)}%`;
        }
      }
      this.personas[i].actualizarEstado(estado, this.radios[estado]);
    });

    let suma = 0;

    for (let i = 0; i < this.contagiados.length; i++) {
      suma += this.contagiados[i];
    }

    this.linea.agregarNodo(suma, mensaje.stateI, mensaje.trialI);
  }

  pintarNodos(nodos) {
    this.nodos = nodos;
    let contador = 0;
    const pasoR = PI_DOS / 200;

    this.poblaciones.forEach((nombre) => {
      this.contagiadosPoblaciones[nombre] = [];
      const nodo = nodos[nombre][0];

      for (let i = 0; i < nodo.length; i++) {
        this.contagiadosPoblaciones[nombre].push(0);
      }
    });

    this.poblaciones.forEach((nombre) => {
      const poblacion = nodos[nombre][0];

      poblacion.forEach((nodo) => {
        contador += 1;
        const angulo = contador * pasoR;
        this.personas.push(new Persona(this.contenedor, nodo, nombre, angulo));
      });
    });

    // this.personas.sort((a, b) => a.id - b.id);
    // this.personas.forEach((persona) => this.contenedor.appendChild(persona.ele));
  }

  calcularResultados() {
    console.log('resultados');
    this.contenedor.style.opacity = 0;
    this.linea.contenedor.style.opacity = 0;
    const res = document.getElementById('poblaciones');

    Object.assign(res.style, {
      position: 'absolute',
      width: '100vw',
      left: 0,
      fontSize: '2em',
      top: '30vh',
    });
  }
}
