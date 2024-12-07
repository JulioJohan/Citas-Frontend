import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AdminitradorService } from 'app/services/administrador/adminitrador.service';
import { AutenticacionService } from 'app/services/autenticacion/autenticacion.service';
import { alertaPregunta, alertaSimple } from 'app/util/alertas';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { Usuario } from 'app/models/Usuario';
import { UsuarioAdministrador } from 'app/models/administrador/UsuarioAdministrador';
import { PreguntaAlertaMensaje } from 'app/models/PreguntaAlertaMensaje';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';

@Component({
  selector: 'app-adminitrador-usuarios',
  templateUrl: './adminitrador-usuarios.component.html',
  styleUrl: './adminitrador-usuarios.component.scss'
})
export class AdminitradorUsuariosComponent implements OnInit{

  constructor(public matDialog:MatDialog,public adminitradorService:AdminitradorService,
    private autenticacionService:AutenticacionService){}

  public usuarios = new MatTableDataSource();  
  public cargando: boolean = true;
  public columnas: string[] = ['name', 'email', 'role', 'especialidad','editar','eliminar']


  ngOnInit(): void {
    this.obtenerTodosLosUsuarios();
  }

  

  public editarUsuario(usuario){

      const matDialogConfig = new MatDialogConfig();
      matDialogConfig.height = '600px';
      matDialogConfig.width = '800px';
      matDialogConfig.autoFocus = false;
      matDialogConfig.data = usuario;
      const dialogRef = this.matDialog.open(ActualizarUsuarioComponent, matDialogConfig);
      dialogRef.afterClosed().subscribe(resultadoModal =>{
        this.obtenerTodosLosUsuarios()
      });
  }

  public crearUsuario(){

    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.height = '600px';
    matDialogConfig.width = '800px';
    matDialogConfig.autoFocus = false;
    const dialogRef = this.matDialog.open(CrearUsuarioComponent, matDialogConfig);
    dialogRef.afterClosed().subscribe(resultadoModal =>{
      this.obtenerTodosLosUsuarios()
    });
  }

  public obtenerTodosLosUsuarios(){
    const idUsuarioAdmin:string = this.autenticacionService.decodeToken();
    this.adminitradorService.obtenerTodosLosUsuarios(idUsuarioAdmin).subscribe(data=>{
      this.adminitradorService.usuarios.data = data.data.usuariosSuscripcion;
      console.log(this.adminitradorService.usuarios.data)
    });
  }
  
  public eliminarUsuarioConfirmar (usuario:Usuario):void{
    const idUsuarioAdmin:string = this.autenticacionService.decodeToken();
    const usuarioAdministrador = new UsuarioAdministrador();
    usuarioAdministrador.idUsuarioAdmin = idUsuarioAdmin;
    usuarioAdministrador.idUsuario = usuario._id;
    console.log('eliminarUsuarioService')
    this.adminitradorService.eliminarUsuario(usuarioAdministrador).subscribe({
      next:resp => {
        this.obtenerTodosLosUsuarios();
        alertaSimple(resp.msg,'','success')
      },
      error:error=> alertaSimple(error.error.msg,'','error')
    });
  }

  public async eliminarUsuario(usuario:Usuario){
    const preguntaAlertaMensaje = new PreguntaAlertaMensaje();
    preguntaAlertaMensaje.titleQuestion ='Estas seguro de eliminar el usuario?'
    preguntaAlertaMensaje.textQuestion = ''
    preguntaAlertaMensaje.icon = 'question';
    preguntaAlertaMensaje.textConfirmButtonQuestion = 'Si, eliminar';
    preguntaAlertaMensaje.textCancelButtonText = 'Upps, creo no';
    preguntaAlertaMensaje.iconConfirmed = 'success';
    preguntaAlertaMensaje.metodo = () => this.eliminarUsuarioConfirmar(usuario);

    await alertaPregunta(preguntaAlertaMensaje);
    //const idUsuarioAdmin:string = this.autenticacionService.decodeToken();
    //const usuarioAdministrador = new UsuarioAdministrador();
    //usuarioAdministrador.idUsuarioAdmin = idUsuarioAdmin;
    //usuarioAdministrador.idUsuario = usuario._id;
   
  }

}
