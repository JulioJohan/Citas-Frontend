import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ReplaySubject, map, of } from 'rxjs';
import { environment } from 'environments/environment.prod';

import {Respuesta} from '../../models/Respuesta';
import { Usuario } from 'app/models/Usuario';
import { tap } from 'lodash';

import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private httpClient:HttpClient) { }

  // Creando la varible url para hacer las peticiones al backend
  private url:string = `${environment.apiUrl}/api/auth`;
  private user: ReplaySubject<Usuario> = new ReplaySubject<Usuario>(1);
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
     * Check the authentication status
     */
     checarAutenticacion(): Observable<boolean>
     {
         // Check if the user is logged in
         if ( this.autenticado )
         {
             return of(true);
         }

         if(this.accessToken){
            return of(true);
         }
 
         // Check the access token availability
         if ( !this.accessToken )
         {
             return of(false);
         }
         
         return of(false);                  
 
     }
    decodeToken():number{
      const token = localStorage.getItem('accessToken');
      const decodedToken: any = jwt_decode.default(token);
      return decodedToken.uid;
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

  
}
