import { MedicinaComponent } from './MedicinaComponent';
export class GenerarCodigoBarrasDecorator implements MedicinaComponent {
    constructor(private medicina: MedicinaComponent) {}

    generarCodigoBarras(): string {
        const codigoBase = this.medicina.generarCodigoBarras();
        return codigoBase + '_Decorado';
    }
}
