import './scss/styles.scss';
import Viz from './modulos/Viz';
import Porcentaje from './modulos/Porcentaje';
import Formulario from './modulos/Formulario';
import contextos from './utilidades/contextos';

const ws = new WebSocket('ws://localhost:8000/ws');
const viz = new Viz();
const proceso = new Porcentaje();
const formulario = new Formulario();
const cuerpo = document.body;
const tablero = document.getElementById('tablero');
const botonAbrirIntro = document.getElementById('botonAbrirIntro');
const botonCerrarIntro = document.getElementById('botonCerrarIntro');
const intro = document.getElementById('intro');
const botonEnviarDatos = document.getElementById('botonEnviarDatos');
const informacionContextual = document.getElementById('informacionContextual');
const botonAnterior = document.getElementById('botonAnterior');
const botonSiguiente = document.getElementById('botonSiguiente');

ws.onopen = () => {
  console.log('Conexión exitosa');
};

ws.onmessage = (e) => {
  const mensaje = JSON.parse(e.data);

  if (mensaje.tipo === 'fin') {
    viz.calcularResultados();
  } else if (mensaje.tipo === 'nodos') {
    viz.pintarNodos(mensaje.datos);
  } else if (mensaje.tipo === 'estado') {
    viz.sumarEstado(mensaje);
    proceso.actualizar();
  }

  // Pedir siguiente estado
  ws.send(
    JSON.stringify({
      tipo: 'sim',
    })
  );
};

botonEnviarDatos.onclick = () => {
  const datos = {};

  formulario.entradas.forEach((entrada, i) => {
    const parametro = entrada.id;
    const input = entrada.querySelector('.in');
    let valor = input.value;

    if (input.classList.contains('seleccion')) {
      const nombre = input.dataset.nombre;
      valor = input.elements[nombre].value;
    }

    if (parametro === 'school_type') {
      valor = valor === 'publico' ? true : false;
    }

    if (input.type === 'number') {
      if (input.value === '0' || input.value === '') {
        return;
      } else {
        valor = +input.value;
      }
    }

    if (typeof valor === 'string' && !valor.length) return;

    datos[parametro] = valor;
  });

  const msg = { tipo: 'inicio', datos: datos };

  ws.send(JSON.stringify(msg));
  tablero.style.display = 'flex';
  viz.linea.pintar();
};

for (let llave in contextos) {
  const campo = document.getElementById(llave);

  campo.addEventListener('mouseover', () => {
    informacionContextual.style.visibility = 'visible';
    informacionContextual.innerText = contextos[llave];
  });

  campo.addEventListener('mouseleave', () => {
    informacionContextual.style.visibility = 'hidden';
  });
}
