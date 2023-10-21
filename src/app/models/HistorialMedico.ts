import { Especialidad } from "./Especialidad";
import { Paciente } from "./Paciente";

export class HistorialMedico {
    _id:string;
    especialidad:Especialidad;
    paciente:Paciente;
    respuesta1:string;
    respuesta2:string;
    respuesta3:string;
    respuesta4:string;
    respuesta5:string;
    resultadoDiagnostico:string;
}