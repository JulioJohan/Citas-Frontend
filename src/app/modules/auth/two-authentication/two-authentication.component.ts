import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AutenticacionService } from 'app/services/autenticacion/autenticacion.service';
import { AuthSignInComponent } from '../sign-in/sign-in.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from 'app/services/usuario/usuario.service';
import { TokenService } from 'app/services/token/token.service';

@Component({
  selector: 'app-two-authentication',
  standalone: true,
  imports: [],
  templateUrl: './two-authentication.component.html',
  styleUrl: './two-authentication.component.scss'
})
export class TwoAuthenticationComponent implements OnInit{

  constructor(private _autenticacionService: AutenticacionService,private _tokenService:TokenService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AuthSignInComponent>,
    private router: Router
  ) {
    console.log('TwoAuthenticationComponent')
    console.log(data)
  }
  ngOnInit(): void {
    this.abrirDobleAuthenticacion()
  }

  async abrirDobleAuthenticacion() {
    console.log('Auth2Inicio' + this.abrirDobleAuthenticacion)


    Swal.fire({
      title: 'Ingresa el código',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      customClass: {
        validationMessage: 'my-validation-message',
      },
      confirmButtonText: 'Iniciar sesión',
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      preConfirm: (value) => {
        if (!value) {
          Swal.showValidationMessage('<i class="fa fa-info-circle"></i> Ingresa un codigo valido')
        }
        this.data.authenticacionDoble = value;

        this._autenticacionService.dobleAuthenticacion(this.data).subscribe(data => {
        console.log('Respuesta dobleAuthenticacion:', data);
         this._autenticacionService.checharLocalStorage();
         this._autenticacionService.decodificarPorId(data);
         const token = localStorage.getItem('tokenNotificacion');
         const tokenJson = JSON.parse(token);
         console.log('token',token)
         console.log('tokenJson',tokenJson)
         const dataMsg = this._tokenService.sendPush(token);
         console.log(dataMsg)
       },error=>{
         this.verificacionError(error)
       })
      },
    })
    
  }

  erroresBackendLogin(error:any){
    console.error('erroresBackendLogin:', error);

    if(!error.error.ok){
      Swal.fire('Error', "Vuelve intentar iniciar sesion", 'error');
      setTimeout(() => {
        this.abrirDobleAuthenticacion();
      }, 1000);
    }
  }
  verificacionError(error:any){
console.error('verificacionError:', error);

    if (!error.error.ok) {
      console.log(error.ok)
      Swal.fire('Error', error.error.msg, 'error');
      setTimeout(() => {
        this.abrirDobleAuthenticacion();
      }, 1000);
    }
  }
}
