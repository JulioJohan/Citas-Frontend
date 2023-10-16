import { Component, OnInit } from '@angular/core';
import { Paciente } from 'app/models/Paciente';
import { PacienteService } from 'app/services/paciente/paciente.service';
import { UsuarioService } from 'app/services/usuario/usuario.service';
import {FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Observable } from 'rxjs';
import { Respuesta } from 'app/models/Respuesta';
import { Usuario } from 'app/models/Usuario';


@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.scss']
})
export class CitaComponent implements OnInit{

  constructor(private pacienteService:PacienteService, private usuarioService:UsuarioService, private _formBuilder: FormBuilder){}

  public listaPacientes:Paciente[];
  public listaDoctores:Usuario[];

  ngOnInit(): void {
    this.obtenerPacientes();
    this.busquedaDoctor('DOCTOR'); 
  }

  private obtenerPacientes(){
    this.pacienteService.obtenerPacientes().subscribe((respuesta)=>{
     this.listaPacientes = respuesta.data;
     console.log(this.listaPacientes)
    })
  }

  private busquedaCurp( busquedaPorCurp:string ){
    this.pacienteService.busquedaCurp( busquedaPorCurp ).subscribe((respuesta) => {
      this.listaPacientes = respuesta.data;
      console.log("busqueda", this.listaPacientes);
    })
  }

  private busquedaDoctor( listaDoctores:string ){
    this.usuarioService.busquedaDoctor( listaDoctores ).subscribe((respuesta) => {
      this.listaDoctores = respuesta.data;
      console.log("busqueda", this.listaDoctores);
    })
  }
 
    // myControl = new FormControl<busquedaCurp>(PacienteService);
    // options: listaPacientes = [];
    // filteredOptions: Observable<busquedaCurp[]>;

  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});

}
