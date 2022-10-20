export class Ejercicio {
    private consigna: string;
    private respuestaCorrecta: string;
    private puntajeMaximo: number;
  
    public constructor(
      paramConsigna: string,
      paramRespuestaCorrecta: string,
      paramPuntajeMaximo: number
    ) {
      this.consigna = paramConsigna;
      this.respuestaCorrecta = paramRespuestaCorrecta;
      this.puntajeMaximo = paramPuntajeMaximo;
    }
  
    public resueltoCorrectamente(respuesta: string): boolean {
      if (this.respuestaCorrecta.toUpperCase() === respuesta.toUpperCase()) {
        return true;
      } else {
        return false;
      }
    }
  
    public corregirEjercicio(respuesta: string): number {
      if (this.respuestaCorrecta.toUpperCase() === respuesta.toUpperCase()) {
        return 1;
      } else {
        return 0;
      }
    }
  
    public getPuntajeMaximo(): number {
      return this.puntajeMaximo;
    }
  }
  