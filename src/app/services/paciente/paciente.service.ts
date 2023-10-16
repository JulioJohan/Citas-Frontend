import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Paciente } from 'app/models/Paciente';
import { environment } from 'environments/environment.prod';
import { Respuesta } from 'app/models/Respuesta';



@Injectable({
    providedIn: 'root'
})

export class PacienteService {

    private url:string = `${environment.apiUrl}/api/Paciente`

    constructor( private httpClient:HttpClient){}
    
    public obtenerPacientes():Observable<Respuesta>{
        console.log(this.url)
        return this.httpClient.get<Respuesta>(`${this.url}/obtenerTodosPacientes`)
    }

    public busquedaCurp( busquedaPorCurp:string ):Observable<Respuesta>{
        console.log(this.url)
        return this.httpClient.get<Respuesta>(`${this.url}/buscaPorCurp/${busquedaPorCurp}`)
    }

    public crearPaciente(paciente:Paciente):Observable<Respuesta>{
        return this.httpClient.post<Respuesta>(`${this.url}/crearPaciente`,paciente);
    }

    public buscarPorId(idPaciente:string):Observable<Respuesta>{
        return this.httpClient.get<Respuesta>(`${this.url}/buscarPorId/${idPaciente}`)
    }

}

