import { Alumno } from "./classAlumno";

class Seminario {
    private tema: string;
    private temaRequisitos: string[];
    private alumnos: Alumno[];

    public constructor(paramTema: string, paramTemaRequisitos: string[]) {
        this.tema = paramTema;
        this.temaRequisitos = paramTemaRequisitos;
    }

    public addRequisito(pRequisito: string): boolean{
        
    }
}