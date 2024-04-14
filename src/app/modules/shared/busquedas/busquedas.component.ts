import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusquedasService } from '../../../services/busqueda/busquedas.service';
import { Paciente } from '../../../models/Paciente';
import { AutenticacionService } from 'app/services/autenticacion/autenticacion.service';

@Component({
  selector: 'app-busquedas',
  templateUrl: './busquedas.component.html',
  styleUrls: ['./busquedas.component.scss'],

})
export class BusquedasComponent implements OnInit{

    constructor(
        private activateRoute: ActivatedRoute,
        private busquedasService:BusquedasService,
        private autenticacionService:AutenticacionService
    ){}

    public pacientes:Paciente[] = [];

    ngOnInit(): void {

        this.activateRoute.params
        .subscribe( ({termino})  => {
            console.log(termino);
            // this.busquedaGlobal(termino);
        })
    }

}
