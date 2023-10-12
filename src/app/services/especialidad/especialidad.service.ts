import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment.prod';
import { Especialidad } from 'app/models/Especialidad';
import { Respuesta } from 'app/models/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  constructor(private httpClient:HttpClient) { }

  private url:string = `${environment.apiUrl}/api/especialidad`;


  public obtenerEspecialidades():Observable<Respuesta>{    
    // `${this.url}/obtener_todos`
    return this.httpClient.get<Respuesta>(`${this.url}/obtener_todos`);    
  }


}
