import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ReplaySubject, map, of } from 'rxjs';
import { environment } from 'environments/environment.prod';

import {Respuesta} from '../../models/Respuesta';
import { Usuario } from 'app/models/Usuario';
import { tap } from 'lodash';

import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private httpClient:HttpClient,private _router:Router) { }

  // Creando la varible url para hacer las peticiones al backend
  private url:string = `${environment.apiUrl}/api/auth`;
  private _usuario: ReplaySubject<Usuario> = new ReplaySubject<Usuario>(1);
  public autenticado: boolean = false;
  private httpOptions ={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for access token
     */
    set accessToken(token: string)
    {
        localStorage.setItem('accessToken', token);
    }

    get accessToken(): string
    {
        return localStorage.getItem('accessToken') ?? '';
    }
      /**
     * Setter & getter for user
     *
     * @param value
     */
      set usuario(value: Usuario)
      {
          // Store the value
          this._usuario.next(value);
      }
  
      get usuario$(): Observable<Usuario>
      {
          return this._usuario.asObservable();
      }
  

     /**
     * Check the authentication status
     */
     checarAutenticacion(): Observable<boolean>
     {
         // Check if the user is logged in
         if ( this.autenticado )
         {
          console.log('autenticado')

             return of(true);
         }

         if(this.accessToken){
          console.log('accessToken')
            return of(true);
         }
 
         // Check the access token availability
         if ( !this.accessToken )
         {
             return of(false);
         }
         
         return of(false);                  
 
     }
    /**
     * Sign out
     */
   public signOut(): Observable<any>
    {
        // Remove the access token from the local storage
        localStorage.removeItem('accessToken');
 
        // Set the authenticated flag to false
        this.autenticado = false;
 
        // this._router.navigate(['users/sign-in']);
        // Return the observable
        return of(true);
    }   
  public decodeToken():string{
      const token = localStorage.getItem('accessToken');
      const decodedToken: any = jwt_decode.default(token);
      return decodedToken.uid;
  } 
  public decodificarPorId(data:any){
    this.accessToken = data;
    this.autenticado = true;
    this._router.navigateByUrl('dashboards/devices');
    const numero:string = this.decodeToken();
    this.buscarPorId(numero).subscribe(data=>{
      console.log(data)
      this.usuario = data.data;
      console.log(this.usuario);
  })
  }  
 

  // Metodo donde hara la peticion HTTP para el endpoind de node
  // Observble nos ayudara a suscribirnos en otro componente y regresara
  // un arreglo especialidad 
  // @return 
  // publico porque quiero acceder a ello
  public registrarUsuario(usuario:Usuario):Observable<Respuesta>{
    return this.httpClient.post<Respuesta>(`${this.url}/new`,usuario,this.httpOptions)   
  }  

  public buscarPorId(id:string):Observable<Respuesta>{
    return this.httpClient.get<Respuesta>(`${this.url}/buscar_id/${id}`);
  }

  public iniciarSesion(usuario:Usuario):Observable<Respuesta>{
    return this.httpClient.post<Respuesta>(`${this.url}/`,usuario);
  }

  

  
}
