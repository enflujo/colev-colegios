export default class LineaTiempo {
  constructor() {
    this.contenedor = document.createElement('div');
    const bloquesTiempo = 600;
    const incrementosHoras = 4;
    this.totalTiempo = bloquesTiempo * incrementosHoras;
  }
}
