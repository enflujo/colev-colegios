import './scss/styles.scss';
import { entrada, salida } from './utilidades/esquemas';

const enviarNTeachers = document.getElementById('enviarNTeachers');
const enviarN_teachers_vacc = document.getElementById('enviarN_teachers_vacc');
const enviarN_school_going = document.getElementById('enviarN_school_going');
const enviarN_classrooms = document.getElementById('enviarN_classrooms');
const enviarClassroom_size = document.getElementById('enviarClassroom_size');
const enviarSchool_type = document.getElementById('enviarSchool_type');
const enviarHeight_room = document.getElementById('enviarHeight_room');
const enviarWidth_room = document.getElementById('enviarWidth_room');
const enviarLength_room = document.getElementById('enviarLength_room');
const enviarMasks_type = document.getElementById('enviarMasks_type');
const enviarVentilation_level = document.getElementById('enviarVentilation_level');
const enviarClass_duration = document.getElementById('enviarClass_duration')

const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');





enviarN_teachers.addEventListener('click', () => {
  const n_teachersValue = document.getElementById('n_teachersValue').value;
  entrada.modificables.n_teachers.value = n_teachersValue;
  return false;
})

enviarN_teachers_vacc.addEventListener('click', () => {
  const n_teachers_vaccValue = document.getElementById('n_teachers_vaccValue').value;
  entrada.modificables.n_teachers_vacc.value = n_teachers_vaccValue;
  return false;
})

enviarN_school_going.addEventListener('click', () => {
  const n_school_goingValue = document.getElementById('n_school_goingValue').value;
  entrada.modificables.n_school_going.value = n_school_goingValue;
  return false;
})

enviarN_classrooms.addEventListener('click', () => {
  const n_classroomsValue = document.getElementById('n_classroomsValue').value;
  entrada.modificables.n_classrooms.value = n_classroomsValue;
  return false;
})

enviarN_classrooms.addEventListener('click', () => {
  const n_classroomsValue = document.getElementById('n_classroomsValue').value;
  entrada.modificables.n_classrooms.value = n_classroomsValue;
  return false;
})

enviarClassroom_size.addEventListener('click', () => {
  const classroom_sizeValue = document.getElementById('classroom_sizeValue').value;
  entrada.modificables.classroom_size.value = classroom_sizeValue;
  return false;
})

enviarSchool_type.addEventListener('click', () => {
  const school_typeValue = document.getElementById('school_typeValue').value;
  entrada.modificables.school_type.value = school_typeValue;
  return false;
})
enviarHeight_room.addEventListener('click', () => {
  const height_roomValue = document.getElementById('height_roomValue').value;
  entrada.modificables.height_room.value = height_roomValue;
  return false;
})
enviarWidth_room.addEventListener('click', () => {
  const width_roomValue = document.getElementById('width_roomValue').value;
  entrada.modificables.width_room.value = width_roomValue;
  return false;
})
enviarLength_room.addEventListener('click', () => {
  const length_roomValue = document.getElementById('length_roomValue').value;
  entrada.modificables.length_room.value = length_roomValue;
  return false;
})
enviarMasks_type.addEventListener('click', () => {
  const masks_typeValue = document.getElementById('masks_typeValue').value;
  entrada.modificables.masks_type.value = masks_typeValue;
  return false;
})
enviarVentilation_level.addEventListener('click', () => {
  const ventilation_levelValue = document.getElementById('ventilation_levelValue').value;
  entrada.modificables.ventilation_level.value = ventilation_levelValue;
  return false;
})
enviarClass_duration.addEventListener('click', () => {
  const class_durationValue = document.getElementById('class_durationValue').value;
  entrada.modificables.class_duration.value = class_durationValue;
  return false;
})


console.log(entrada.modificables);
/**
 * Otra interfaz para mostrar los resultados de la predicción que hace el modelo
 * Están en salida
 */


console.log(salida);
