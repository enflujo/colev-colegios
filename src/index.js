import './scss/styles.scss';
import { entrada, salida } from './utilidades/esquemas';

const restas = document.querySelectorAll('.restar');
const sumas = document.querySelectorAll('.sumar');
const selecciones = document.querySelectorAll('.seleccion');
const porcentaje = document.getElementById('porcentaje');
const rangos = document.querySelectorAll('.uiRango');
const n_teachers = document.getElementById('n_teachers');
const n_teachers_vacc = document.getElementById('n_teachers_vacc');
const n_school_going = document.getElementById('n_school_going');
const n_classrooms = document.getElementById('n_classrooms');
const classroom_size = document.getElementById('classroom_size');
const school_type = document.getElementById('school_type');
const height_room = document.getElementById('height_room');
const width_room = document.getElementById('width_room');
const length_room = document.getElementById('length_room');
const masks_type = document.getElementById('masks_type');
const ventilation_level = document.getElementById('ventilation_level');
const class_duration = document.getElementById('class_duration');
const informacionContextual = document.getElementById('informacionContextual');



const botonEnviarDatos = document.getElementById('botonEnviarDatos');
const porcentajeAvanzado = document.getElementById("porcentajeAvanzado");
const entradas = document.querySelectorAll('.entrada');


restas.forEach((btn) => {
  btn.onclick = (e) => {
    e.target.parentNode.querySelector('input[type=number]').stepDown();
  };
});

sumas.forEach((btn) => {
  btn.onclick = (e) => {
    e.target.parentNode.querySelector('input[type=number]').stepUp();
  };
});

rangos.forEach((elemento) => {
  const rango = elemento.querySelector('.rango');
  const valor = elemento.querySelector('.cantidad');

  rango.oninput = () => {
    valor.value = rango.value;
    
  };
  valor.oninput = () => {
    rango.value = valor.value;
  };
});

//Actualizar porcentaje avanzado
function actualizarBarraPorcentaje() {
  const actives = document.querySelectorAll(".active");
  let widthActual = ((actives.length) / (entradas.length)) * 100;
  porcentajeAvanzado.style.width = widthActual + "%";
  let widthActualSinDecimales = Math.floor(widthActual);
  porcentajeAvanzado.innerText = widthActualSinDecimales + "% avanzado";
  console.log(widthActual, entradas.length, actives.length);
}

//Event Listeners Click
n_teachers.addEventListener('click', () => {
  actualizarBarraPorcentaje();
  n_teachers_vacc.classList.remove("hidden");
  n_teachers_vacc.classList.add("active");
})

n_teachers_vacc.addEventListener('click', () => {
  actualizarBarraPorcentaje();
  n_school_going.classList.remove("hidden");
  n_school_going.classList.add("active");
})

n_school_going.addEventListener('click', () => {
  actualizarBarraPorcentaje();
  n_classrooms.classList.remove("hidden");
  n_classrooms.classList.add("active");
})

n_classrooms.addEventListener('click', () => {
  actualizarBarraPorcentaje();
  classroom_size.classList.remove("hidden");
  classroom_size.classList.add("active");
})

classroom_size.addEventListener('click', () => {
  actualizarBarraPorcentaje();
  school_type.classList.remove("hidden");
  school_type.classList.add("active");
})

school_type.addEventListener('click', () => {
  actualizarBarraPorcentaje();
  height_room.classList.remove("hidden");
  height_room.classList.add("active");
})

height_room.addEventListener('click', () => {
  actualizarBarraPorcentaje();
  width_room.classList.remove("hidden");
  width_room.classList.add("active");
})

width_room.addEventListener('click', () => {
  actualizarBarraPorcentaje();
  length_room.classList.remove("hidden");
  length_room.classList.add("active");
})

length_room.addEventListener('click', () => {
  actualizarBarraPorcentaje();
  masks_type.classList.remove("hidden");
  masks_type.classList.add("active");
})

masks_type.addEventListener('click', () => {
  actualizarBarraPorcentaje();
  ventilation_level.classList.remove("hidden");
  ventilation_level.classList.add("active");
})

ventilation_level.addEventListener('click', () => {
  actualizarBarraPorcentaje();
  class_duration.classList.remove("hidden");
  class_duration.classList.add("active");
})

class_duration.addEventListener('click', () => {
  actualizarBarraPorcentaje();
  botonEnviarDatos.classList.remove("hidden");
})

//Event listeners mouseover

n_teachers.addEventListener('mouseover', () => {
  informacionContextual.innerText = 'El número aproximado de profesores/as que van a trabajar a tu colegio, teniendo en cuenta tanto a quienes trabajan en planta como a quienes van temporalmente a las instalaciones.'
})

n_teachers_vacc.addEventListener('mouseover', () => {
  informacionContextual.innerText = 'Teniendo en cuenta la fase de vacunación y los datos aportados en el colegio, aproximadamente cuántos profesores/as deberían estar vacunados en el momento en el que respondes esta encuesta.'
})

n_school_going.addEventListener('mouseover', () => {
  informacionContextual.innerText = 'A partir de número de estudiantes por cada salón y el número de salones o cursos, cuál es el aproximado de estudiantes que asisten a tu colegio.'
})

n_classrooms.addEventListener('mouseover', () => {
  informacionContextual.innerText = 'El número de salones que son empleados diariamente, incluyendo salones en donde se realizan actividades extra-académicas.'
})

classroom_size.addEventListener('mouseover', () => {
  informacionContextual.innerText = 'El número de estudiantes que asisten diariamente y que se reúnen en un mismo espacio durante toda la jornada escolar.'
})

school_type.addEventListener('mouseover', () => {
  informacionContextual.innerText = 'El colegio es privado o es un colegio financiado por la nación o los entes territoriales.'
})

height_room.addEventListener('mouseover', () => {
  informacionContextual.innerText = 'Cuántos metros aproximadamente tienen de alto los salones a los que asisten los estudiantes.'
})

width_room.addEventListener('mouseover', () => {
  informacionContextual.innerText = 'La cantidad de metros aproximados contados desde la pared izquierda hasta la pared de la derecha en relación a la ubicación del tablero.'
})

length_room.addEventListener('mouseover', () => {
  informacionContextual.innerText = 'La cantidad de metros aproximados contados desde la pared del frente hasta la pared de atrás en relación a la ubicación del tablero.'
})

masks_type.addEventListener('mouseover', () => {
  informacionContextual.innerText = 'Cuál es el material y las especificaciones del tapabocas que empleas para asistir a lugares públicos.'
})

ventilation_level.addEventListener('mouseover', () => {
  informacionContextual.innerText = 'Dependiendo del número de ventanas, el alto y ancho de las mismas y la cantidad de ellas que pueden abrirse, indica un nivel aproximado de ventilación en el salón de clase.'
})

class_duration.addEventListener('mouseover', () => {
  informacionContextual.innerText = 'La duración de la jornada escolar, descontando aquellas horas donde se realizan actividades al aire libre..'
})
