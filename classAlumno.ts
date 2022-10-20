import { TrabajoPractico } from "./classTabajoPractico";

 export class Alumno {
    private nomber: string;
    private trabajoPracticos: TrabajoPractico[];
    private respuestas: string[];

     public constructor(pNombre: string) {
        this.nomber = pNombre; 
     } 

     public realisarTabajoPractico(pTrabajoParactico: TrabajoPractico, pRespuestas: string[]): boolean {
        for()
     }

    private buscar(pTrabajoParactico: TrabajoPractico): boolean {
        for (let i = 0; i < this.trabajoPracticos.length; i++) {
            if (this.trabajoPracticos[i] === pTrabajoParactico) {
                return true; 
            }
        }
        return false;
    }

 }