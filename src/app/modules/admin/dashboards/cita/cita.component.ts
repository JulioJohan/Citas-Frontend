import { Component, OnInit } from '@angular/core';
import { Paciente } from 'app/models/Paciente';
import { PacienteService } from 'app/services/paciente/paciente.service';
import {FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.scss']
})
export class CitaComponent implements OnInit{

  constructor(private pacienteService:PacienteService, private _formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.obtenerPacientes();
  }
  public listaPacientes:Paciente[];

  private obtenerPacientes(){
    this.pacienteService.obtenerPacientes().subscribe((respuesta)=>{
     this.listaPacientes = respuesta.data;
     console.log(this.listaPacientes)
    })
  }

  private busquedaCurp( busquedaPorCurp:string ){
    this.pacienteService.busquedaCurp( busquedaPorCurp ).subscribe((respuesta) => {
      this.listaPacientes = respuesta.data;
      console.log("BUSQUEDA", this.listaPacientes);
    })
  }
 
    myControl = new FormControl<busquedaCurp>(PacienteService);
    options: listaPacientes = [];
    filteredOptions: Observable<busquedaCurp[]>;

  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});

}
