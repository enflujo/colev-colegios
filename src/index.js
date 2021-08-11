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
  informacionContextual.innerText = 'informacion contextual del numero de profesores'
})

n_teachers_vacc.addEventListener('mouseover', () => {
  informacionContextual.innerText = 'Otras información diferente'
})










// const enviarNTeachers = document.getElementById('enviarNTeachers');
// const enviarN_teachers_vacc = document.getElementById('enviarN_teachers_vacc');
// const enviarN_school_going = document.getElementById('enviarN_school_going');
// const enviarN_classrooms = document.getElementById('enviarN_classrooms');
// const enviarClassroom_size = document.getElementById('enviarClassroom_size');
// const enviarSchool_type = document.getElementById('enviarSchool_type');
// const enviarHeight_room = document.getElementById('enviarHeight_room');
// const enviarWidth_room = document.getElementById('enviarWidth_room');
// const enviarLength_room = document.getElementById('enviarLength_room');
// const enviarMasks_type = document.getElementById('enviarMasks_type');
// const enviarVentilation_level = document.getElementById('enviarVentilation_level');
// const enviarClass_duration = document.getElementById('enviarClass_duration');

// const canvas1 = document.getElementById('canvas1');
// const ctx1 = canvas1.getContext('2d');

// enviarNteachers.addEventListener('click', () => {
//   const n_teachersValue = document.getElementById('n_teachersValue').value;
//   entrada.modificables.n_teachers.value = n_teachersValue;
//   return false;
// });

// enviarN_teachers_vacc.addEventListener('click', () => {
//   const n_teachers_vaccValue = document.getElementById('n_teachers_vaccValue').value;
//   entrada.modificables.n_teachers_vacc.value = n_teachers_vaccValue;
//   return false;
// });

// enviarN_school_going.addEventListener('click', () => {
//   const n_school_goingValue = document.getElementById('n_school_goingValue').value;
//   entrada.modificables.n_school_going.value = n_school_goingValue;
//   return false;
// });

// enviarN_classrooms.addEventListener('click', () => {
//   const n_classroomsValue = document.getElementById('n_classroomsValue').value;
//   entrada.modificables.n_classrooms.value = n_classroomsValue;
//   return false;
// });

// enviarN_classrooms.addEventListener('click', () => {
//   const n_classroomsValue = document.getElementById('n_classroomsValue').value;
//   entrada.modificables.n_classrooms.value = n_classroomsValue;
//   return false;
// });

// enviarClassroom_size.addEventListener('click', () => {
//   const classroom_sizeValue = document.getElementById('classroom_sizeValue').value;
//   entrada.modificables.classroom_size.value = classroom_sizeValue;
//   return false;
// });

// enviarSchool_type.addEventListener('click', () => {
//   const school_typeValue = document.getElementById('school_typeValue').value;
//   entrada.modificables.school_type.value = school_typeValue;
//   return false;
// });
// enviarHeight_room.addEventListener('click', () => {
//   const height_roomValue = document.getElementById('height_roomValue').value;
//   entrada.modificables.height_room.value = height_roomValue;
//   return false;
// });
// enviarWidth_room.addEventListener('click', () => {
//   const width_roomValue = document.getElementById('width_roomValue').value;
//   entrada.modificables.width_room.value = width_roomValue;
//   return false;
// });
// enviarLength_room.addEventListener('click', () => {
//   const length_roomValue = document.getElementById('length_roomValue').value;
//   entrada.modificables.length_room.value = length_roomValue;
//   return false;
// });
// enviarMasks_type.addEventListener('click', () => {
//   const masks_typeValue = document.getElementById('masks_typeValue').value;
//   entrada.modificables.masks_type.value = masks_typeValue;
//   return false;
// });
// enviarVentilation_level.addEventListener('click', () => {
//   const ventilation_levelValue = document.getElementById('ventilation_levelValue').value;
//   entrada.modificables.ventilation_level.value = ventilation_levelValue;
//   return false;
// });
// enviarClass_duration.addEventListener('click', () => {
//   const class_durationValue = document.getElementById('class_durationValue').value;
//   entrada.modificables.class_duration.value = class_durationValue;
//   return false;
// });

// console.log(entrada.modificables);
// /**
//  * Otra interfaz para mostrar los resultados de la predicción que hace el modelo
//  * Están en salida
//  */

// console.log(salida);
