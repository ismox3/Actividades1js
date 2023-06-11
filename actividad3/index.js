function calcularPromedio(notas) {
  const sumatoria = notas.reduce((suma, nota) => suma + nota, 0);
  return sumatoria / notas.length;
}

function obtenerAprobados(notas) {
  return notas.filter(nota => nota >= 10).length;
}

function obtenerAplazados(notas) {
  return notas.filter(nota => nota < 10).length;
}

function contarAprobadosPorCantidadMaterias(alumnos, cantidadMaterias) {
  return alumnos.filter(alumno => alumno.aprobadas === cantidadMaterias).length;
}

function obtenerNotaMaxima(notas) {
  return Math.max(...notas);
}

function main() {
  const alumnos = [
    { A: 1, B: "Juan", C: 17, D: 7, E: 8 },
    { A: 2, B: "María", C: 15, D: 18, E: 20 },
    { A: 3, B: "Pedro", C: 10, D: 11, E: 9 },
    { A: 4, B: "Ana", C: 8, D: 16, E: 18 },
    { A: 5, B: "Luis", C: 14, D: 15, E: 12 }
  ];

  const materias = {
    matematicas: [],
    fisica: [],
    programacion: []
  };

  alumnos.forEach(alumno => {
    materias.matematicas.push(alumno.C);
    materias.fisica.push(alumno.D);
    materias.programacion.push(alumno.E);
  });

  const promedioMatematicas = calcularPromedio(materias.matematicas);
  const promedioFisica = calcularPromedio(materias.fisica);
  const promedioProgramacion = calcularPromedio(materias.programacion);

  const aprobadosMatematicas = obtenerAprobados(materias.matematicas);
  const aprobadosFisica = obtenerAprobados(materias.fisica);
  const aprobadosProgramacion = obtenerAprobados(materias.programacion);

  const aplazadosMatematicas = obtenerAplazados(materias.matematicas);
  const aplazadosFisica = obtenerAplazados(materias.fisica);
  const aplazadosProgramacion = obtenerAplazados(materias.programacion);

  const aprobadosTodasMaterias = alumnos.filter(alumno =>
    alumno.C >= 10 && alumno.D >= 10 && alumno.E >= 10
  ).length;

  const aprobadosUnaMateria = alumnos.filter(alumno =>
    (alumno.C >= 10 && alumno.D < 10 && alumno.E < 10) ||
    (alumno.C < 10 && alumno.D >= 10 && alumno.E < 10) ||
    (alumno.C < 10 && alumno.D < 10 && alumno.E >= 10)
  ).length;

  const aprobadosDosMaterias = alumnos.filter(alumno =>
    (alumno.C >= 10 && alumno.D >= 10 && alumno.E < 10) ||
    (alumno.C >= 10 && alumno.D < 10 && alumno.E >= 10) ||
    (alumno.C < 10 && alumno.D >= 10 && alumno.E >= 10)
  ).length;

  const notaMaximaMatematicas = obtenerNotaMaxima(materias.matematicas);
  const notaMaximaFisica = obtenerNotaMaxima(materias.fisica);
  const notaMaximaProgramacion = obtenerNotaMaxima(materias.programacion);

  console.log("Promedio de matemáticas:", promedioMatematicas);
  console.log("Promedio de física:", promedioFisica);
  console.log("Promedio de programación:", promedioProgramacion);
  console.log("Alumnos aprobados en matemáticas:", aprobadosMatematicas);
  console.log("Alumnos aprobados en física:", aprobadosFisica);
  console.log("Alumnos aprobados en programación:", aprobadosProgramacion);
  console.log("Alumnos aplazados en matemáticas:", aplazadosMatematicas);
  console.log("Alumnos aplazados en física:", aplazadosFisica);
  console.log("Alumnos aplazados en programación:", aplazadosProgramacion);
  console.log("Alumnos que aprobaron todas las materias:", aprobadosTodasMaterias);
  console.log("Alumnos que aprobaron una sola materia:", aprobadosUnaMateria);
  console.log("Alumnos que aprobaron dos materias:", aprobadosDosMaterias);
  console.log("Nota máxima en matemáticas:", notaMaximaMatematicas);
  console.log("Nota máxima en física:", notaMaximaFisica);
  console.log("Nota máxima en programación:", notaMaximaProgramacion);
}

main();
