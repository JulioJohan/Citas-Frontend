import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AutenticacionService } from 'app/services/autenticacion/autenticacion.service';
import { AuthSignInComponent } from '../sign-in/sign-in.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from 'app/services/usuario/usuario.service';

@Component({
  selector: 'app-two-authentication',
  standalone: true,
  imports: [],
  templateUrl: './two-authentication.component.html',
  styleUrl: './two-authentication.component.scss'
})
export class TwoAuthenticationComponent implements OnInit{

  constructor(private _autenticacionService: AutenticacionService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AuthSignInComponent>,
    private router: Router
  ) {
    console.log(data)
  }
  ngOnInit(): void {
    this.abrirDobleAuthenticacion()
  }

  async abrirDobleAuthenticacion() {
    console.log('Auth2Inicio' + this.abrirDobleAuthenticacion)

    const { value = '' } = await Swal.fire<string>({
      title: 'Ingresa el código',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      footer: '<div class="swal-footer"><a href="#" class="btn bg-gray-600 text-white">Regresar a inicio de sesión</a><button type="button" class="btn bg-blue-800 text-white" id="resend">Enviar otro código</button></div>',
      confirmButtonText: 'Iniciar sesión',
      showLoaderOnConfirm: true,
      allowOutsideClick: false,


      didOpen:() => {

        console.log('SweetAlert didOpen');
        document.querySelector('.swal-footer .btn-link')!.addEventListener('click', () => {
          // Lógica para redirigir a la página de login
          this.router.navigateByUrl('/users/sign-in')

        //   console.log('Abrir swal ' + this.abrirDobleAuthenticacion.didOpen)
        })
        document.querySelector('.swal-footer .btn-secondary')!.addEventListener('click', () => {
          console.log('Enviar otro código');
          this._autenticacionService.iniciarSesion(this.data).subscribe(data=>{
              Swal.fire({
                title: 'El código de verificación se envio a tu correo!',
                text: data.msg,
                imageUrl: 'https://i.pinimg.com/564x/a1/e2/27/a1e22750dd39a0216a528c7cee960849.jpg',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
              setTimeout(()=>{
                this.abrirDobleAuthenticacion();
              },1000)
          },error=>{
            this.erroresBackendLogin(error);
          })
        });
      }
    })

    if (value.trim().length <= 0) {
      Swal.fire('Error', 'Ingresa un codigo valido', 'error');
      setTimeout(() => {
        this.abrirDobleAuthenticacion();
      }, 2000);
      return;
    }
    this.data.authenticacionDoble = value;

    return this._autenticacionService.dobleAuthenticacion(this.data).subscribe(data => {
       console.log('Respuesta dobleAuthenticacion:', data);
      this._autenticacionService.checharLocalStorage();
      this._autenticacionService.decodificarPorId(data);

    },error=>{
      this.verificacionError(error)
    })

  }

  erroresBackendLogin(error:any){
    console.error('erroresBackendLogin:', error);

    if(!error.error.ok){
      Swal.fire('Error', "Vuelve intentar iniciar sesion", 'error');
      setTimeout(() => {
        this.abrirDobleAuthenticacion();
      }, 30000);
    }
  }
  verificacionError(error:any){
console.error('verificacionError:', error);

    if (!error.error.ok) {
      console.log(error.ok)
      Swal.fire('Error', error.error.msg, 'error');
      setTimeout(() => {
        this.abrirDobleAuthenticacion();
      }, 30000);
    }
  }
}
