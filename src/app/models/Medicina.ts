import { MedicinaComponent } from './MedicinaComponent';
export class Medicina implements MedicinaComponent {
    _id?: string;
    nombreMedicina: string;
    categoria: string;
    viaAdministracion: string;
    cantidad: number;
    fechaEntrega: Date;
    medicamentoDisponible: boolean;
    codigoBarras: string;

    constructor(nombreMedicina:string, categoria: string, viaAdministracion: string, cantidad: number){
        this.nombreMedicina = nombreMedicina;
        this.categoria = categoria;
        this.viaAdministracion = viaAdministracion;
        this.cantidad = cantidad;
        this.fechaEntrega = new Date();
        this.medicamentoDisponible = true; 
    }

    generarCodigoBarras?(): string {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
}
