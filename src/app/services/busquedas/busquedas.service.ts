import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BusquedaTodos } from "app/models/BusquedaTodos";
import { Usuario } from "app/models/Usuario";
import { environment } from "environments/environment";
import { Observable, map } from "rxjs";


const baseUrl = environment.apiUrl

@Injectable({
    providedIn: 'root'
})
export class BusquedasService{

    constructor(private http:HttpClient) { }

    get token():string{
        return localStorage.getItem('accessToken') || '';
      }

    get headers(){
        return {
          headers:{
            'x-token':this.token
          }
        }
      }

    public busquedaGlobal(termino:string):Observable<BusquedaTodos>{
        const url =`${baseUrl}/api/todo/${termino}`;
        return this.http.get<BusquedaTodos>(url)
    }

    public transformarUsuarios(resultados:any[]){
        return resultados.map(user=> new Usuario(user._id, user.name,user.email
            ,user.role, null,null,null,null,null,null));

    }

    public transformarPacientes(resultados:any[]){
        return resultados;
    }

    public transformarMedicos(resultados:any[]){
        return resultados;
    }

    public buscar(tipo:'usuarios'|'pacientes'|'diagnosticos',
    termino:string){
        const url =`${baseUrl}/api/todo/coleccion/${tipo}/${termino}`;
        console.log(url)
        return this.http.get(url,this.headers)
        .pipe(map((resp:any)=> resp.resultados)).pipe(map((resp:any)=>{
          switch(tipo){
            case 'usuarios':
              return this.transformarUsuarios(resp);
            case 'pacientes':
              return this.transformarPacientes(resp);
            case 'diagnosticos':
              return this.transformarMedicos(resp);
            default:
              return [];
          }
        }))
    }


}