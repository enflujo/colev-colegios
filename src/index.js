import './scss/styles.scss';
import contextos from './utilidades/contextos';
import Viz from './modulos/Viz';
import Porcentaje from './modulos/Porcentaje';

const ws = new WebSocket('ws://localhost:8000/ws');
const viz = new Viz();
const proceso = new Porcentaje();

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
const tablero = document.getElementById('tablero');
const restas = document.querySelectorAll('.restar');
const sumas = document.querySelectorAll('.sumar');
const rangos = document.querySelectorAll('.uiRango');
const valores = document.querySelectorAll('.in');
const entradas = document.querySelectorAll('.entrada');
const informacionContextual = document.getElementById('informacionContextual');
const botonEnviarDatos = document.getElementById('botonEnviarDatos');
const porcentajeAvanzado = document.getElementById('porcentajeAvanzado');

let completados = 0;

restas.forEach((btn) => {
  btn.onclick = (e) => {
    const input = e.target.parentNode.querySelector('input[type=number]');
    input.stepDown();
    input.dispatchEvent(new Event('change'));
  };
});

sumas.forEach((btn) => {
  btn.onclick = (e) => {
    const input = e.target.parentNode.querySelector('input[type=number]');
    input.stepUp();
    input.dispatchEvent(new Event('change'));
  };
});

rangos.forEach((elemento) => {
  const rango = elemento.querySelector('.rango');
  const valor = elemento.querySelector('.cantidad');

  rango.oninput = () => {
    valor.value = rango.value;
    valor.dispatchEvent(new Event('change'));
  };

  valor.oninput = () => {
    rango.value = valor.value;
  };
});

valores.forEach((entrada) => {
  entrada.onchange = () => {
    if (!entrada.dataset.completo) {
      actualizarBarraPorcentaje();
      entrada.dataset.completo = true;
    }
  };
});

//Actualizar porcentaje avanzado
function actualizarBarraPorcentaje() {
  completados++;
  let widthActual = (completados / valores.length) * 100;
  porcentajeAvanzado.style.width = widthActual + '%';
  let widthActualSinDecimales = Math.floor(widthActual);
  porcentajeAvanzado.innerText = widthActualSinDecimales + '% avanzado';

  if (completados === valores.length) {
    botonEnviarDatos.disabled = false;
  }
}

botonEnviarDatos.onclick = async () => {
  const datos = {};

  entradas.forEach((entrada, i) => {
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
  tablero.style.display = 'block';
};

for (let llave in contextos) {
  const campo = document.getElementById(llave);

  campo.addEventListener('mouseover', () => {
    informacionContextual.innerText = contextos[llave];
  });
}
