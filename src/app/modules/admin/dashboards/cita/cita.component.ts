import { Component, OnInit } from '@angular/core';
import { Paciente } from 'app/models/Paciente';
import { PacienteService } from 'app/services/paciente/paciente.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.scss']
})
export class CitaComponent implements OnInit{

  constructor(private pacienteService:PacienteService){}

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



}
