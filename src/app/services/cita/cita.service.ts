import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cita } from 'app/models/Cita';
import { Respuesta } from 'app/models/Respuesta';
import { environment } from 'environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private url:string = `${environment.apiUrl}/api/Cita`

  constructor( private httpClient:HttpClient){}

  public agendarCita(cita:Cita):Observable<Respuesta>{
    return this.httpClient.post<Respuesta>(`${this.url}/agendarCita`,cita);
  }

  public obtenerCitasPorDoctor(idDoctor:string):Observable<Respuesta>{
    return this.httpClient.get<Respuesta>(`${this.url}/obtenerCitasDoctor/${idDoctor}`);   
  }
}
