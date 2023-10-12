import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment.prod';

import {Respuesta} from '../../models/Respuesta';
import { Usuario } from 'app/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private httpClient:HttpClient) { }

  // Creando la varible url para hacer las peticiones al backend
  private url:string = `${environment.apiUrl}/api/auth`;
  private httpOptions ={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

  // Metodo donde hara la peticion HTTP para el endpoind de node
  // Observble nos ayudara a suscribirnos en otro componente y regresara
  // un arreglo especialidad 
  // @return 
  // publico porque quiero acceder a ello
  // public obtenerEspecialidades():Observable<Especialidad[]>{
  //   return this.httpClient.get<Especialidad[]>(`${this.url}/obtener_todos`);
  // }

  // Metodo donde hara la peticion HTTP para el endpoind de node
  // Observble nos ayudara a suscribirnos en otro componente y regresara
  // un arreglo especialidad 
  // @return 
  // publico porque quiero acceder a ello
  public registrarUsuario(usuario:Usuario):Observable<Respuesta>{
    return this.httpClient.post<Respuesta>(`${this.url}/new`,usuario,this.httpOptions);
  }  
}
