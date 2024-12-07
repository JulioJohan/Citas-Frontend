import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Respuesta } from 'app/models/Respuesta';
import { UsuarioAdministrador } from 'app/models/administrador/UsuarioAdministrador';
import { UsuarioAdministradorEmail } from 'app/models/administrador/UsuarioAdministradorEmail';
import { enviromentAuth } from 'environments/enviroment.auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminitradorService {

  constructor(private http:HttpClient) { }

  private urlApi:string = `${enviromentAuth.urlAuth}/api/administrador`;
  public usuarios = new MatTableDataSource();

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };


  public agregarNuevoUsuario (usuarioAdministrador:UsuarioAdministrador):Observable<Respuesta>{
    return this.http.post<Respuesta>(`${this.urlApi}/agregarNuevoUsuario`,usuarioAdministrador,this.httpOptions);
  }

  public agregarNuevoUsuarioEmail(usuarioAdministradorEmail: UsuarioAdministradorEmail):Observable<Respuesta>{
    return this.http.post<Respuesta>(`${this.urlApi}/agregarNuevoUsuarioEmail`,usuarioAdministradorEmail,this.httpOptions);
  }

  public actualizarUsuario(usuarioAdministrador:UsuarioAdministrador):Observable<Respuesta>{
    return this.http.put<Respuesta>(`${this.urlApi}/actualizarUsuario`,usuarioAdministrador,this.httpOptions);
  }
  public obtenerTodosLosUsuarios(idUsuarioAdmin:string):Observable<Respuesta>{
    return this.http.get<Respuesta>(`${this.urlApi}/obtenerTodosUsuarios/${idUsuarioAdmin}`,this.httpOptions);
  }

  public eliminarUsuario(usuarioAdministrador:UsuarioAdministrador):Observable<Respuesta>{
    return this.http.post<Respuesta>(`${this.urlApi}/eliminarUsuario`,usuarioAdministrador);
  }


}
