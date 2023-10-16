import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from '../../../../../services/paciente/paciente.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FuseAlertType } from '@fuse/components/alert';

@Component({
  selector: 'app-nuevo-paciente',
  templateUrl: './nuevo-paciente.component.html',
  styleUrls: ['./nuevo-paciente.component.scss']
})
export class NuevoPacienteComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder,
    private _pacienteService:PacienteService,
    public dialogRef: MatDialogRef<NuevoPacienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ){}
  
  public alert: { type: FuseAlertType; message: string } = {
      type   : 'success',
      message: '',
  };

  public mostrarAlerta: boolean = false;

  ngOnInit(): void {
    this.formularioRegistro = this._formBuilder.group({
      name          :['',[Validators.required,Validators.minLength(3)]],
      fatherLastname:['',[Validators.required,Validators.minLength(3)]],
      motherLastname:['',[Validators.required,Validators.minLength(3)]],
      telephone     :['',[Validators.required,Validators.minLength(10)]],
      curp          :['',[Validators.required,Validators.minLength(18)]]
    })
  }
  
  public formularioRegistro:FormGroup;

  public guardarPaciente(){
    // Se pone this.formularioRegistro.value
    this._pacienteService.crearPaciente(this.formularioRegistro.value).subscribe((respuesta)=>{      

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

  private errorRespuesta(error:string){   
    // Set the alert
    this.alert = {
        type   : 'error',
        message: error,
    };

    // Show the alert
    this.mostrarAlerta = true;
}

  public cerrar(): void {
    this.dialogRef.close();
  }




  

  


}
