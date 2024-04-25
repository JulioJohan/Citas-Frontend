import { Diagnostico } from "./Diagnostico";
import { Paciente } from "./Paciente";
import { Usuario } from "./Usuario";

export interface BusquedaTodos{

    diagnostico:Diagnostico[];
    pacientes:Paciente[];
    usuario:Usuario[];

}