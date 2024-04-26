import { Injectable, HostListener } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ReplaySubject, map, of, tap, Subscription, interval } from 'rxjs';
import { environment } from 'environments/environment.prod';
import { enviromentAuth } from 'environments/enviroment.auth';
import { Respuesta } from '../../models/Respuesta';
import { Usuario } from 'app/models/Usuario';
import Swal from 'sweetalert2';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { FuseNavigationItem } from '@fuse/components/navigation';
import { AuthForgotPasswordComponent } from '../../../app/modules/auth/forgot-password/forgot-password.component';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  public subscripcion = new Subscription;
  public fechaExpiracion:any;

  constructor(private httpClient: HttpClient, private _router: Router) {

  }

  // Creando la varible url para hacer las peticiones al backend
  private url: string = `${enviromentAuth.urlAuth}/api/auth`;
  private _usuario: ReplaySubject<Usuario> = new ReplaySubject<Usuario>(1);
  private _menuArreglo: FuseNavigationItem[] = [];
  public autenticado: boolean = false;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Setter & getter for access token
   */
   set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }


  set menu(menu: any) {
    localStorage.setItem('menu', JSON.stringify(menu));
  }

  get menu() {
    this._menuArreglo = JSON.parse(localStorage.getItem('menu'))
    return this._menuArreglo;
  }
  /**
 * Setter & getter for user
 *
 * @param value
 */
  set usuario(value: Usuario) {
    // Store the value
    this._usuario.next(value);
  }

  get usuario$(): Observable<Usuario> {
    return this._usuario.asObservable();
  }

  get headers(){
    return {
      headers:{
        'x-token':this.accessToken
      }
    }
  }

  /**
  * Check the authentication status
  */
  checarAutenticacion(): Observable<boolean> {
    // Check if the user is logged in
    if (this.accessToken && this.menu) {
      console.log("autenticado checarAutenticacion")
      return of(true);
    }

    // Check the access token availability
    if (!this.accessToken) {
      console.log('no false 2')

      return of(false);
    }
    console.log('false 2')

    return of(false);

  }
  /**
   * Sign out
   */
  public signOut(): Observable<any> {
    // Remove the access token from the local storage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('usuario');
    localStorage.removeItem('menu');        // Set the authenticated flag to false
    this.autenticado = false;

    // this._router.navigate(['users/sign-in']);
    // Return the observable
    return of(true);
  }


  validarToken(): Observable<boolean> {
    console.log("Validar Token");
    const accessToken = localStorage.getItem('accessToken') || '';
    // Obteniendo los headers correctamente
    return this.httpClient.get(`${this.url}/renew`, {
      headers: {
        'x-token': this.accessToken
      }
    }).pipe(
      map((resp: any) => {
        console.log(resp);
        const { email, nombre, role , uid } = resp.usuarioDB;
        this.usuario = new Usuario(
          nombre, email, '', role, uid
        );
        this.checharLocalStorage();
        console.log("Renew" + resp.token);
        this.fechaExpiracion = this.decodeToken();
        localStorage.setItem('fechaExpiracion', this.fechaExpiracion.exp);
        return true;
      }),
    //   catchError(error => of(false))
    );
  }

  public decodeToken(): string {
    const token = this.accessToken;
    console.log(token)

    const decodedToken: any = jwt_decode.default(token);
    console.log(decodedToken)
    return decodedToken.uid;
  }



  public decodificarPorId(respuesta: Respuesta) {
    console.log(respuesta)
    this.accessToken = respuesta.data;
    console.log(this.accessToken)
    this.menu = respuesta.menu;
    console.log(this.menu)
    this.autenticado = true;
    this.fechaExpiracion = jwt_decode.default(this.accessToken);
    localStorage.setItem('fechaExpiracion',this.fechaExpiracion.exp)
    console.log('fechaExpiracion')
    console.log(this.fechaExpiracion)
    const numero: string = this.decodeToken();
    this.buscarPorId(numero).subscribe(data => {
      console.log(data)
      this.usuario = data.data;
      setTimeout(() => {
        localStorage.setItem('usuario', JSON.stringify(data.data))
        this._router.navigateByUrl(respuesta.menu[0].link);

      }, 2000)
      console.log(localStorage.getItem('menu'))


      // location.reload();

    })
  }


  //   esTokenValido():Observable<boolean>{
  //     const token = localStorage.getItem('token') || '';

  //     // Obtener los headers
  //     return this.http.get(`${this.url}/renew`,{
  //         headers:{
  //             'x-token': this.token
  //         }
  //     })
  //   }



  checharLocalStorage() {
    console.log("checharLocalStorage")
    const usuario = localStorage.getItem('usuario');
    const menu = localStorage.getItem('menu');
    if (usuario !== '' || usuario !== null || usuario !== undefined) {
      localStorage.removeItem('usuario');
    }
    if (menu !== '' || menu !== null || usuario !== undefined) {

      localStorage.removeItem('menu');
    }
  }


  // Metodo donde hara la peticion HTTP para el endpoind de node
  // Observble nos ayudara a suscribirnos en otro componente y regresara
  // un arreglo especialidad
  // @return
  // publico porque quiero acceder a ello
  public registrarUsuario(usuario: Usuario): Observable<Respuesta> {
    return this.httpClient.post<Respuesta>(`${this.url}/new`, usuario, this.httpOptions)
  }

  public buscarPorId(id: string): Observable<Respuesta> {
    return this.httpClient.get<Respuesta>(`${this.url}/buscar_id/${id}`);
  }

  public iniciarSesion(usuario: Usuario): Observable<Respuesta> {
    return this.httpClient.post<Respuesta>(`${this.url}/`, usuario);
  }


  public sesionGoogle(token: string) {
    return this.httpClient.post(`${this.url}/google`, { token })
      .pipe(
        tap((resp: any) => {
          console.log(resp)
          localStorage.setItem('token', resp.token)
        })
      )
  }

  confirmarCuentaEmail(tokenDoble: string): Observable<any> {
    console.log(this.confirmarCuentaEmail)
    return this.httpClient.get<any>(`${this.url}/confirmar/${tokenDoble}`);
  }

  olvidePassword(email: any): Observable<Respuesta> {
    console.log(email);

    return this.httpClient.post<Respuesta>(`${this.url}/olvide-password`, email);
  }

  comprobarTokenPassword(token: any): Observable<Respuesta> {
    return this.httpClient.get<Respuesta>(`${this.url}/nuevo-password/${token}`);
  }

  nuevoPassword(tokenDoble: any, password: any): Observable<Respuesta> {
    return this.httpClient.post<Respuesta>(`${this.url}/nuevo-password/${tokenDoble}`, password);
  }

  dobleAuthenticacion(usuario:any):Observable<Respuesta>{
    console.log('Enviando solicitud con:', usuario);
    return this.httpClient.post<Respuesta>(`${this.url}/doble-authenticacion/`,usuario);
  }

  tokenExpirado(){
    console.log("verificando")
    this.subscripcion = interval(40000).subscribe(data=>{
      const fechaActual = new Date().getTime() / 1000;
      console.log("Fecha "+ fechaActual)
      const tiempoRestante = Number(localStorage.getItem('fechaExpiracion')) - fechaActual;
      const tiempoRestanteMinutos = tiempoRestante / 60;
      console.log(tiempoRestanteMinutos);
      if(Math.round(tiempoRestanteMinutos) === 5){
        Swal.fire({
          title: 'Tu sesion esta por expirar',
          text: "Deseas Renovarlo?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Renovar'
        }).then((result) => {
          if (result.isConfirmed) {
            this.validarToken();
            location.reload();
          }
          if(result.isDismissed){
            this.tokenExpirado();
          }
        })
      }

      if(tiempoRestanteMinutos <= 0){
        Swal.fire('Sesion','Token Expirado','error');
        //saber el id de la alerta
        setTimeout(()=>{
          Swal.close()
        },2000);
        localStorage.removeItem('token');
        localStorage.removeItem('fechaExpiracion');
        this.ngOnDestroy();
        this._router.navigateByUrl('/users/sign-in');

      }
    })

  }

  ngOnDestroy():void{
    this.subscripcion.unsubscribe();
  }



}
