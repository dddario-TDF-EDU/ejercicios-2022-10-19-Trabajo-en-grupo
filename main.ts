import { Alumno } from "./classAlumno";
import { Ejercicio } from "./classEjercicio";
import { Seminario } from "./classSeminario";
import { TrabajoPractico } from "./classTabajoPractico";

//instanciamos los ejercicios y armamos un array.
let ejercicioA: Ejercicio = new Ejercicio("¿Cuanto es 2 + 2?","4",2);
let ejercicioB: Ejercicio = new Ejercicio("¿Cuanto es 2 * 2?","4",2);
let ejercicioC: Ejercicio = new Ejercicio("¿Cuanto es 2 / 2?","1",2);
let ejercicioD: Ejercicio = new Ejercicio("¿Cuanto es 2 mod 2?","0",2);
let ejercicioE: Ejercicio = new Ejercicio("Si tenemos el string '2',¿Cuanto es '2' + '2'?","22",2);
let arrayEjercicios: Ejercicio[] = [ejercicioA, ejercicioB, ejercicioC, ejercicioD, ejercicioE];
//instanciamos el Trabajo Practico y le agregamos los ejercicios.
let trabajoPractico1: TrabajoPractico = new TrabajoPractico("Programacion",10);
console.log(trabajoPractico1.addEjercicio(ejercicioA));
console.log(trabajoPractico1.addEjercicio(ejercicioB));
console.log(trabajoPractico1.addEjercicio(ejercicioC));
console.log(trabajoPractico1.addEjercicio(ejercicioD));
console.log(trabajoPractico1.addEjercicio(ejercicioE));
    //comprobamos si detecta que este ejercicios esta repetido
console.log(trabajoPractico1.addEjercicio(ejercicioA));
//instanciamos un Alumno.
let respuestasExactas: string[] = ["4", "4", "1", "0", "22"];
let estudianteA: Alumno = new Alumno("Carlitos");
    //linea repetida para comprobar que la funcion responde correctamente.
console.log(estudianteA.realizarTabajoPractico(trabajoPractico1, respuestasExactas));
console.log(estudianteA.realizarTabajoPractico(trabajoPractico1, respuestasExactas));
//instanciamos seminario
let seminarioA: Seminario = new Seminario("Tema Programacion");


