import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviromentAuth } from 'environments/enviroment.auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private httpClient:HttpClient) { }

  private url: string = `${enviromentAuth.urlAuth}/api/token`;

  public saveToken(token:any):Observable<any> {
    return this.httpClient.post(`${this.url}/guardar`,token);
  }

  public sendPush(token:any):Observable<any> {
    console.log('sendPush');
    return this.httpClient.post(`${this.url}/enviarNotificacion`,token);
  }


}
