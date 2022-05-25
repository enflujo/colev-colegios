export default class Formulario {
  constructor() {
    this.restas = document.querySelectorAll('.restar');
    this.sumas = document.querySelectorAll('.sumar');
    this.valores = document.querySelectorAll('.in');
    this.entradas = document.querySelectorAll('.entrada');
    this.botonesRapidos = document.querySelectorAll('.br');
    this.porcentajeAvanzado = document.getElementById('porcentajeAvanzado');
    this.porcentajeCirculo = document.getElementById('porcentajeCirculo');
    this.etiqueta = document.getElementById('porcentajeEtiqueta');
    this.completados = 0;

    this._definirEventos();
  }

  _definirEventos() {
    this.restas.forEach((btn) => {
      btn.onclick = (e) => {
        const input = e.target.parentNode.querySelector('input[type=number]');
        input.stepDown();
        input.dispatchEvent(new Event('change'));
        if (input.value === '0') {
          Object.assign(input.style, {
            backgroundColor: '#e7fbfa',
          });
        }
      };
    });

    this.sumas.forEach((btn) => {
      btn.onclick = (e) => {
        const input = e.target.parentNode.querySelector('input[type=number]');
        input.stepUp();
        input.dispatchEvent(new Event('change'));
        if (input.value !== '0') {
          Object.assign(input.style, {
            backgroundColor: '#35fee3',
          });
        }
      };
    });

    this.botonesRapidos.forEach((btn) => {
      btn.onclick = (e) => {
        const input = e.target.parentNode.parentNode.querySelector('input[type=number]');
        input.value = btn.value;
        input.dispatchEvent(new Event('change'));
      };
    });

    this.valores.forEach((entrada) => {
      entrada.onchange = () => {
        console.log(entrada);
        if (!entrada.dataset.completo) {
          this._actualizarBarraPorcentaje();
          entrada.dataset.completo = true;
        }
      };
    });
  }

  _actualizarBarraPorcentaje() {
    this.completados++;
    let widthActual = (this.completados / this.valores.length) * 100;
    let widthActualSinDecimales = Math.floor(widthActual);
    this.etiqueta.innerText = widthActualSinDecimales + '%';
    this.porcentajeCirculo.style.strokeDasharray = `${widthActual / 10}, 100`;
  }
}
