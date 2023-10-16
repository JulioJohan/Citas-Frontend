import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Usuario } from 'app/models/Usuario';
import { environment } from 'environments/environment.prod';
import { Respuesta } from 'app/models/Respuesta';

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {

    private url:string = `${environment.apiUrl}/api/auth`

    constructor(private httpClient:HttpClient) {}

    public busquedaDoctor( busquedaPorDoctor:string ):Observable<Respuesta>{
        console.log(this.url)
        return this.httpClient.get<Respuesta>(`${this.url}/busqueda_doctor/${busquedaPorDoctor}`)
    }
    

}
