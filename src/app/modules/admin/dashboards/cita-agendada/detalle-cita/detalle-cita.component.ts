import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { CitaAgendada } from 'app/models/CitaAgendada';
import { Respuesta } from 'app/models/Respuesta';

import { DiagnosticoService } from '../../../../../services/diagnostico/diagnostico.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Diagnostico } from 'app/models/Diagnostico';
import { FuseAlertType } from '@fuse/components/alert';


@Component({
  selector: 'app-detalle-cita',
  templateUrl: './detalle-cita.component.html',
  styleUrls: ['./detalle-cita.component.scss']
})
export class DetalleCitaComponent implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<DetalleCitaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CitaAgendada,
    private _formBuilder:FormBuilder,
    private _diagnosticoService:DiagnosticoService){}

  formularioRegistro:FormGroup;


  
  public alert: { type: FuseAlertType; message: string } = {
    type   : 'success',
    message: '',
  };

  public mostrarAlerta: boolean = false;

  ngOnInit(): void {
    this.formularioRegistro = this._formBuilder.group({
      respuesta1           :['',[Validators.required,Validators.minLength(18)]],
      respuesta2           :['',[Validators.required,Validators.minLength(18)]],
      respuesta3           :['',[Validators.required,Validators.minLength(18)]],
      respuesta4           :['',[Validators.required,Validators.minLength(18)]],
      respuesta5           :['',[Validators.required,Validators.minLength(18)]],
      resultadoDiagnostico :['',[Validators.required,Validators.minLength(18)]]
      
    });
  }

  private errorRespuesta(error:string){   
    // Set the alert
    this.alert = {
        type   : 'error',
        message: error,
    };

    // Show the alert
    this.mostrarAlerta = true;
}


  public guardarDiagnostico(){

    const diagnostico = new Diagnostico();

    diagnostico.especialidad = this.data.doctor.especialidad._id;
    diagnostico.paciente = this.data.paciente._id;
    diagnostico.respuesta1 = this.formularioRegistro.get('respuesta1').value;
    diagnostico.respuesta2 = this.formularioRegistro.get('respuesta2').value;
    diagnostico.respuesta3 = this.formularioRegistro.get('respuesta3').value;
    diagnostico.respuesta4 = this.formularioRegistro.get('respuesta4').value;
    diagnostico.respuesta5 = this.formularioRegistro.get('respuesta5').value;
    diagnostico.resultadoDiagnostico = this.formularioRegistro.get('resultadoDiagnostico').value;

    this._diagnosticoService.guardarDiagnostico(diagnostico,this.data._id).subscribe((respuesta:Respuesta)=>{    
      this.alert = {
        type   : 'success',
        message: respuesta.msg,
    };
    // Show the alert
    this.mostrarAlerta = true;
      this.dialogRef.close(respuesta.data);
    },(error)=>{
      this.errorRespuesta(error.error.msg);
    });  
  }

  public cerrar(){
    this.dialogRef.close();
  }



}
