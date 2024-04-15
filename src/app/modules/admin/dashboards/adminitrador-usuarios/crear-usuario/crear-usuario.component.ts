import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FuseAlertType } from '@fuse/components/alert';
import { Rol } from 'app/enums/Rol';
import { Especialidad } from 'app/models/Especialidad';
import { Usuario } from 'app/models/Usuario';
import { UsuarioAdministrador } from 'app/models/administrador/UsuarioAdministrador';
import { AdminitradorService } from 'app/services/administrador/adminitrador.service';
import { AutenticacionService } from 'app/services/autenticacion/autenticacion.service';
import { EspecialidadService } from 'app/services/especialidad/especialidad.service';
import { alertaSimple } from 'app/util/alertas';





@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.scss'
})
export class CrearUsuarioComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CrearUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario,
    private formBuilder: FormBuilder,
    private especialidadService:EspecialidadService,
    private autenticacionService:AutenticacionService,
    private administracionService:AdminitradorService
  ) { }
  ngOnInit(): void {
    this.consultarEspecialidades();
    this.validarRolFormulario();
  }

  public alert: { type: FuseAlertType; message: string } = {
    type: 'success',
    message: '',
  };

  public tiposUsuario = ['DOCTOR', 'ENFERMERA', 'PACIENTE']

  public mostrarAlerta: boolean = false;

  public especialidades:Especialidad[];

  public formularioRegistro = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role: ['', [Validators.required]],
    especialidad: ['', [Validators.required]],
  })

  private validarRolFormulario(){
    this.formularioRegistro.get('role').valueChanges.subscribe((role)=>{
        if(role === Rol.ENFERMERA){
            this.formularioRegistro.get('especialidad').clearValidators();
        }
        if(role === Rol.DOCTOR){
            this.formularioRegistro.get('especialidad').setValidators([Validators.required]);
        }
        if(role === Rol.PACIENTE){
            this.formularioRegistro.get('especialidad').clearValidators();
        }
        this.formularioRegistro.get('especialidad').updateValueAndValidity();

    })
}

  public guardarUsuario() {
    const idUsuarioAdmin:string = this.autenticacionService.decodeToken();

    const usuarioRegistro:UsuarioAdministrador = {
      name:this.formularioRegistro.value.name,
      email:this.formularioRegistro.value.email,
      password:this.formularioRegistro.value.password,
      role:this.formularioRegistro.value.role,
      idEspecialidad:this.formularioRegistro.value.especialidad,
      idUsuarioAdmin: idUsuarioAdmin
    }

    this.administracionService.agregarNuevoUsuario(usuarioRegistro).subscribe((data)=>{
      alertaSimple(data.msg,'','success');
    },error=> alertaSimple(error.error.msg,'','error'));
   console.log(usuarioRegistro)
   this.cerrarModal();

  }

  public consultarEspecialidades(){
    this.especialidadService.obtenerEspecialidades().subscribe(data=>{
      this.especialidades = data.data;
      console.log(this.especialidades)
    });
  }
  cerrarModal() {
    this.dialogRef.close();

  }


}
