import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare var Stomp: any;
declare var SockJS: any;

// declare function connectNotificaciones():any;

@Injectable({providedIn: 'root'})
export class DevicesServices{
    private dataSubject = new BehaviorSubject<any>(null);
    private counterProduct = new BehaviorSubject<any>(null);
    private stompClient: any;
    private httpOptions ={
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };

    constructor(private httpClient:HttpClient) {
      this.dataSubject.next(null);
    }

    registerProduct(id:string):Observable<any>{
      const url = `xd`;
      console.log(url)
      return this.httpClient.get<any>(url,this.httpOptions);  
    }

    getCounterProduct(): Observable<any> {
      return this.dataSubject.asObservable();
    }

      // Agrega un método para conectar solo si no está conectado
    connectIfNeeded() {
        if (!this.stompClient || !this.stompClient.connected) {
        this.connect();
        }
    }

    connect() {
      const urlMensajes = 'xD';
    //   const urlMensajes = 'xD';
      const topicMensajes = '/topic/mensajes';
      const socket = new SockJS(urlMensajes);

      this.stompClient = Stomp.over(socket);

      this.stompClient.connect({          
        // Puedes agregar headers personalizados aquí si es necesario
        },(frame) => {
          
          console.log('Connected: ' + frame);
          this.stompClient.subscribe(topicMensajes, (comunicado) => {
            const comunicadoObj = JSON.parse(comunicado.body);

            this.dataSubject.next(comunicadoObj);
          });
        }
      );
    }

    getMensaje(): Observable<any> {
      return this.dataSubject.asObservable();
    }

    disconnect() {
        if (this.stompClient !== null) {
            console.log("Desconectado")
            this.stompClient.disconnect();
            this.stompClient = null;
        }
    }

}
