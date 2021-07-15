import './scss/styles.scss';
import { entrada, salida } from './utilidades/esquemas';

// De momento las variables de entradas.fijos no las tratamos ya que son las que operan dentro del modelo. Se vuelven relevantes si pasamos el modelo a tensroflow.

/**
 * Debemos crear una interfaz para producir cada variable que debe ingresar el ususario
 * Estas variables se encuentran en entrada.modificables
 */
console.log(entrada.modificables);

/**
 * Otra interfaz para mostrar los resultados de la predicción que hace el modelo
 * Están en salida
 */
console.log(salida);
