import './scss/styles.scss';
import contextos from './utilidades/contextos';

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
  let url = 'http://localhost:8000/?';

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
    } else if (parametro === 'ventilation_level') {
      valor = +valor;
    }
    console.log(parametro, valor);
    url += `${parametro}=${valor}`;
    url += i < entradas.length - 1 ? '&' : '';
  });
  console.log(url);
  const peticion = await fetch(url);
  const datos = await peticion.json();
  console.log(datos);
};

for (let llave in contextos) {
  const campo = document.getElementById(llave);

  campo.addEventListener('mouseover', () => {
    informacionContextual.innerText = contextos[llave];
  });
}
