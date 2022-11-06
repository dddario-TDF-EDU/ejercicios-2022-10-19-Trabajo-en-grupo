import { TrabajoPractico } from "./classTabajoPractico";

export class Alumno {
    private nombre: string;
    private trabajoPracticos: TrabajoPractico[];
    private respuestas: string[][];

    public constructor(pNombre: string) {
        this.nombre = pNombre;
        this.trabajoPracticos = [];
        this.respuestas = [[]];
    }

    public realizarTabajoPractico(pTrabajoPractico: TrabajoPractico, pRespuestas: string[]): boolean {
        let yaExiste: boolean = this.buscarTrabajoPractico(pTrabajoPractico)
        if (yaExiste === true) {
            console.log("Trabajo Repetido");
            return false;
        } else {
            this.trabajoPracticos.push(pTrabajoPractico);
            let posicionRespuestas: number = this.trabajoPracticos.length - 1;
            for (let i = 0; i < pRespuestas.length; i++) {
                this.respuestas[posicionRespuestas].push(pRespuestas[i]);
            }
            console.log("Trabajo y respuestas agregados");
            console.log("La nota del trabajo fue: " + pTrabajoPractico.corregirTrabajoPractico(pRespuestas) + " de " + pRespuestas.length);
            return true;
        }
    }

    private buscarTrabajoPractico(pTrabajoPractico: TrabajoPractico): boolean {
        let yaExiste: boolean = false;
        for (let i = 0; i < this.trabajoPracticos.length; i++) {
            if (this.trabajoPracticos[i].getTema() === pTrabajoPractico.getTema()) {
                yaExiste = true
                return yaExiste;
            }
        }
        return yaExiste;
    }
}