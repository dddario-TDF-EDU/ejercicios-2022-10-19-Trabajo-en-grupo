import { Alumno } from "./classAlumno";

export class Seminario {
    private tema: string;
    private temasRequisitos: string[];
    private alumnos: Alumno[];

    public constructor(paramTema: string) {
        this.tema = paramTema;
        this.temasRequisitos = [];
        this.alumnos = [];
    }

    public addRequisito(pRequisito: string): boolean {
        let yaExiste: boolean = false;
        for (let index = 0; index < this.temasRequisitos.length; index++) {
            if(pRequisito.toUpperCase() === this.temasRequisitos[index].toUpperCase()) {
                yaExiste = true;
                return yaExiste;
            }
        }
        this.temasRequisitos.push(pRequisito);
        return yaExiste;
    }
}