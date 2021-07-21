export const entrada = {
  modificables: {
    n_teachers: {
      tipo: 'int',
      descripcion: 'Número de profesores.',
    },
    n_teachers_vacc: {
      tipo: 'int',
      descripcion: 'Número de profesores vacunados.',
    },
    n_school_going: {
      tipo: 'int',
      descripcion: 'Número de estudiantes.',
    },
    n_classrooms: {
      tipo: 'int',
      descripcion: 'Número de salones.',
    },
    classroom_size: {
      tipo: 'int',
      descripcion: 'Número de estudiantes por salon.',
    },
    school_type: {
      tipo: 'bool',
      descripcion: '¿Es colegio privado?',
    },
    height_room: {
      tipo: 'float',
      descripcion: 'Alto del salón en metros.',
    },
    width_room: {
      tipo: 'float',
      descripcion: 'Ancho del salón en metros.',
    },
    length_room: {
      tipo: 'float',
      descripcion: 'Largo del salón en metros.',
    },
    masks_type: {
      tipo: 'str',
      descripcion: 'Tipo de mascaras.',
      opciones: [],
    },
    ventilation_level: {
      tipo: 'int',
      descripcion: 'Grados de ventilación en el salón en un rango de 0 a 15.',
    },
    class_duration: {
      tipo: 'int',
      descripcion: 'Duración de las clases en horas.',
    },
  },
  //
  fijos: {
    intervention: {
      tipo: 'float',
      descripcion: 'Intervention efficiency in external layers.',
    },
    school_occupation: {
      tipo: 'float',
      descripcion: 'Percentage of occupation at school.',
    },
    work_occupation: {
      tipo: 'float',
      descripcion: 'Percentage of occupation at workplaces.',
    },
    school_mean: {
      tipo: 'float',
      descripcion: 'Degree/contacts distribution (mean).',
    },
    school_std: {
      tipo: 'float',
      descripcion: 'Degree/contacts distribution (std).',
    },
    school_r: {
      tipo: 'float',
      descripcion: 'Correlation in layer.',
    },
    work_mean: {
      tipo: 'float',
      descripcion: 'Degree/contacts distribution (mean).',
    },
    work_std: {
      tipo: 'float',
      descripcion: 'Degree/contacts distribution (std).',
    },
    work_r: {
      tipo: 'float',
      descripcion: 'Correlation in layer.',
    },
    community_mean: {
      tipo: 'float',
      descripcion: 'Degree/contacts distribution (mean).',
    },
    community_std: {
      tipo: 'float',
      descripcion: 'Degree/contacts distribution (std).',
    },
    community_r: {
      tipo: 'float',
      descripcion: 'Correlation in layer.',
    },
    Tmax: {
      tipo: 'float',
      descripcion: 'Length of simulation (days).',
    },
    delta_t: {
      tipo: 'float',
      descripcion: 'Time steps.',
    },
    number_trials: {
      tipo: 'float',
      descripcion: 'Number of iteration per step.',
    },
  },
};

export const salida = {
  soln_S: {
    tipo: 'float',
    descripcion: 'Fraction of susceptible individuals per time t',
  },
  soln_E: {
    tipo: 'float',
    descripcion: 'Fraction of exposed individuals per time t',
  },
  soln_I1: {
    tipo: 'float',
    descripcion: 'Fraction of infected (mild) individuals per time t',
  },
  soln_I2: {
    tipo: 'float',
    descripcion: 'Fraction of infected (hosp.) individuals per time t',
  },
  soln_I3: {
    tipo: 'float',
    descripcion: 'Fraction of infected (ICU) individuals per time t',
  },
  soln_D: {
    tipo: 'float',
    descripcion: 'Fraction of deceased individuals per time t',
  },
  soln_R: {
    tipo: 'float',
    descripcion: 'Fraction of recovered individuals per time t',
  },
  soln_cum_S: {
    tipo: 'float',
    descripcion: 'Cumulative fraction of susceptible individuals per time t',
  },
  soln_cum_E: {
    tipo: 'float',
    descripcion: 'Cumulative fraction of exposed individuals per time t',
  },
  soln_cum_I1: {
    tipo: 'float',
    descripcion: 'Cumulative fraction of infected (mild) individuals per time t',
  },
  soln_cum_I2: {
    tipo: 'float',
    descripcion: 'Cumulative fraction of infected (hosp.) individuals per time t',
  },
  soln_cum_I3: {
    tipo: 'float',
    descripcion: 'Cumulative fraction of infected (ICU) individuals per time t',
  },
  soln_cum_D: {
    tipo: 'float',
    descripcion: 'Cumulative fraction of deceased individuals per time t',
  },
  soln_cum_R: {
    tipo: 'float',
    descripcion: 'Cumulative fraction of recovered individuals per time t',
  },
  P_infection_school: {
    tipo: 'float',
    descripcion: 'Infection probability by attending school',
  },
  P_infection_comm: {
    tipo: 'float',
    descripcion: 'Infection probability by attending community gatherings',
  },
};
