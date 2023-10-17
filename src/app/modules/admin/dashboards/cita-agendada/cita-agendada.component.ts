import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'app/services/usuario/usuario.service';
import { CitaService } from '../../../../services/cita/cita.service';
import { Cita } from 'app/models/Cita';
import { Usuario } from 'app/models/Usuario';
import { FuseAlertType } from '@fuse/components/alert';
import { CitaAgendada } from 'app/models/CitaAgendada';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Paciente } from 'app/models/Paciente';
import { DetalleCitaComponent } from './detalle-cita/detalle-cita.component';

@Component({
  selector: 'app-cita-agendada',
  templateUrl: './cita-agendada.component.html',
  styleUrls: ['./cita-agendada.component.scss']
})
export class CitaAgendadaComponent implements OnInit{
  constructor(private matDialog:MatDialog,private citaService:CitaService){}
  
  public listaCitas:CitaAgendada[] = [];

  public mostrarAlerta: boolean = false;

  public alert: { type: FuseAlertType; message: string } = {
    type   : 'success',
    message: '',
  };

  ngOnInit(): void {
    this.obtenerCitasMedico();
  }

  public obtenerCitasMedico(){
    const usuario:Usuario = JSON.parse(localStorage.getItem('usuario'))
    if(!usuario || !usuario._id){
      this.alert = {
        type: 'error',
        message: 'Que intentas hacer?'
      }
      this.mostrarAlerta = true;
      return;
    }

    this.citaService.obtenerCitasPorDoctor(usuario._id).subscribe((respuesta)=>{           
      this.listaCitas = respuesta.data;
      this.listaCitas.forEach((citaAgendada:CitaAgendada)=>{
        this.convertirFecha(citaAgendada.year,citaAgendada.month,citaAgendada.day,citaAgendada.startHour ,citaAgendada);
      })     
      console.log(this.listaCitas)
    })    
  }

  private convertirFecha(anio:number,mes:number,dia:number,hora,citaAgendada:CitaAgendada){
    const fecha = new Date(anio,mes,dia,hora);
    citaAgendada.date = fecha;    
  }

  public verDetallesCita(citaAgendada:CitaAgendada){
    console.log(citaAgendada)
    const matDialogConfig = new MatDialogConfig()
    matDialogConfig.autoFocus = false;
    matDialogConfig.data = this.listaCitas.find(cita=> cita._id === citaAgendada._id)
    console.log(matDialogConfig.data)
    const dialogRef = this.matDialog.open(DetalleCitaComponent,matDialogConfig);

    dialogRef.afterClosed().subscribe((result:Paciente) => {
      this.obtenerCitasMedico();    
    });
  }

}
