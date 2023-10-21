import { Paciente } from "./Paciente";
import { UsuarioDTO } from "./UsuarioDTO";

export class CitaAgendada {
    _id:string;
    doctor:UsuarioDTO;
    paciente:Paciente;
    age:number;
    weight:number;
    height:number;
    temperature:number;
    pressureArterial:number;
    heartrate:number;
    date:Date;
    year:number;
    month:number;
    day:number;
    startHour:number;
    endHour:number;
    note:string;
}