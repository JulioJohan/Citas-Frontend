import { Suscripcion } from "./Suscripcion";

export class Usuario {
   // _id:string
   // name:string;
   // email:string;
   // password:string;
   // role:string
   // especialidad:string;
   // suscripcion:Suscripcion
   // usuariosSuscripcion:Usuario[];
   // google:boolean;
   // tokenDoble:string;
   // authenticacionDoble:string;


    constructor(
        public _id?:string,
        public name?:string,
        public email?:string,
        public password?:string,
        public role?:'ADMIN' | 'DOCTOR' | 'ENFERMERA' | 'PACIENTE',
        public especialidad?:string,
        public suscripcion?:Suscripcion,
        public usuariosSuscripcion?:Usuario[],
        public google?:boolean,
        public tokenDoble?:string,
        public authenticacionDoble?:string
    ) { }
}
