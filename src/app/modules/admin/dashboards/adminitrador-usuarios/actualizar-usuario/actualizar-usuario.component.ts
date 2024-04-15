import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Rol } from 'app/enums/Rol';
import { Especialidad } from 'app/models/Especialidad';
import { Usuario } from 'app/models/Usuario';
import { UsuarioAdministrador } from 'app/models/administrador/UsuarioAdministrador';
import { AdminitradorService } from 'app/services/administrador/adminitrador.service';
import { AutenticacionService } from 'app/services/autenticacion/autenticacion.service';
import { EspecialidadService } from 'app/services/especialidad/especialidad.service';
import { alertaSimple } from 'app/util/alertas';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrl: './actualizar-usuario.component.scss'
})
export class ActualizarUsuarioComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<ActualizarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario,
    private formBuilder: FormBuilder,
    private especialidadService:EspecialidadService,
    private autenticacionService:AutenticacionService,
    private administracionService:AdminitradorService
  ) { }

  public especialidades:Especialidad[];


  ngOnInit(): void {
    this.consultarEspecialidades();
    this.validarRolFormulario();
  }

  public tiposUsuario = ['DOCTOR', 'ENFERMERA', 'PACIENTE']

  public formulario = this.formBuilder.group({
    role: ['', [Validators.required]],
    especialidad: ['', [Validators.required]],
  })

  private validarRolFormulario(){
    this.formulario.get('role').valueChanges.subscribe((role)=>{
        if(role === Rol.ENFERMERA){
            this.formulario.get('especialidad').clearValidators();
        }
        if(role === Rol.DOCTOR){
            this.formulario.get('especialidad').setValidators([Validators.required]);
        }
        if(role === Rol.PACIENTE){
            this.formulario.get('especialidad').clearValidators();
        }
        this.formulario.get('especialidad').updateValueAndValidity();

    })
}

  public consultarEspecialidades(){
    this.especialidadService.obtenerEspecialidades().subscribe(data=>{
      this.especialidades = data.data;
      console.log(this.especialidades)
    });
  }

  public actualizarUsuario(){
    
    const usuarioActualizar = new UsuarioAdministrador();
    const idUsuarioAdmin:string = this.autenticacionService.decodeToken();
    usuarioActualizar.idUsuarioAdmin = idUsuarioAdmin;
    usuarioActualizar.idUsuario = this.data._id;
    usuarioActualizar.idEspecialidad = this.formulario.value.especialidad;
    usuarioActualizar.role = this.formulario.value.role;
    this.administracionService.actualizarUsuario(usuarioActualizar).subscribe({
      next: resp => alertaSimple(resp.msg,'','success'),
      error: error=> alertaSimple(error.error.msg,'','error')
    });
  }

  public cerrarModal() {
    this.dialogRef.close();

  }

}
