import Persona from './Persona';
import { PI_DOS, estados, margenTodos } from '../utilidades/constantes';

export default class {
  constructor() {
    this.nodos = {};
    this.personas = [];
    this.contenedor = document.getElementById('todos');
    this.radios = [200, 170, 135, 95, 50, 10, 240];
    this.colores = [];
    this.poblaciones = ['highschool', 'preschool', 'primary', 'work', 'other'];
    this.estados = [
      'suceptibles',
      'expuestos',
      'infectado moderado',
      'infectado severo',
      'infectado crítico',
      'fallecido',
      'recuperado',
    ];

    this.coloresEstado = [
      '#F9D423', // suceptible
      '#FECEAB', // expuestos
      '#FF847C', // moderado
      '#E84A5F', // severo
      '#EC2049', // crítico
      '#13191b', // fallecido
      '#99B898', // recuperado
    ];

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
      console.log(color);
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
      this.personas[i].actualizarEstado(estado, this.radios[estado]);
    });
  }

  pintarNodos(nodos) {
    this.nodos = nodos;
    let contador = 0;
    const pasoR = PI_DOS / 200;

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
  }
}
