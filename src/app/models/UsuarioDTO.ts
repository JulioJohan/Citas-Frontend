import { Especialidad } from "./Especialidad";

export class UsuarioDTO {
    _id:string
    name:string;
    email:string;
    password:string;
    role:string
    especialidad:Especialidad;
    
}