import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment.prod';
import { Observable } from 'rxjs';
import { Respuesta } from 'app/models/Respuesta';
import { Diagnostico } from '../../models/Diagnostico';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticoService {

  private url:string = `${environment.apiUrl}/api/diagnostico`

  constructor(private httpClient:HttpClient) { }


  public guardarDiagnostico (diagnostico:Diagnostico, idCita:string):Observable<Respuesta>{
    return this.httpClient.post<Respuesta>(`${this.url}/guardarDiagnostico/${idCita}`,diagnostico);
  }

  public obtenerHistorialMedico(idPaciente:string):Observable<Respuesta>{
    return this.httpClient.get<Respuesta>(`${this.url}/busquedaCurpDiagnostico/${idPaciente}`);

  }


}
