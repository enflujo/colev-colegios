export default class Formulario {
  constructor() {
    this.restas = document.querySelectorAll('.restar');
    this.sumas = document.querySelectorAll('.sumar');
    this.valores = document.querySelectorAll('.in');
    this.entradas = document.querySelectorAll('.entrada');
    this.botonesRapidos = document.querySelectorAll('.br');
    this.porcentajeAvanzado = document.getElementById('porcentajeAvanzado');
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
      };
    });

    this.sumas.forEach((btn) => {
      btn.onclick = (e) => {
        const input = e.target.parentNode.querySelector('input[type=number]');
        input.stepUp();
        input.dispatchEvent(new Event('change'));
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
    this.porcentajeAvanzado.style.width = widthActual + '%';
    let widthActualSinDecimales = Math.floor(widthActual);
    this.etiqueta.innerText = widthActualSinDecimales + '%';
  }
}
