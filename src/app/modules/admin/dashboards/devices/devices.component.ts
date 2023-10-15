import { Component, OnInit, OnDestroy } from '@angular/core';
import { DevicesServices } from 'app/services/devices/devices.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
})
export class DevicesComponent implements OnInit {

    mensajes:any[]=[];
    mensajeSubscription: Subscription;

  constructor(
    private devicesServices:DevicesServices
    ){
  }

  ngOnInit() {
    // this.devicesServices.connectIfNeeded();

    // this.devicesServices.connect();
    // this.getMensaje();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.getMensaje();
  }

  getMensaje(){

    this.mensajeSubscription=this.devicesServices.getMensaje().subscribe(mensaje=>{
        console.log("mensaje recibido {}",mensaje);
        this.validaMensaje(mensaje);
        // this.mensajes.push(mensaje);
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // this.devicesServices.disconnect();
    this.mensajeSubscription.unsubscribe();

  }

  validaMensaje(nuevoMensaje){
    if(nuevoMensaje==null){
        return;
    }
    const indice = this.mensajes.findIndex((m) => m.dispositivoId == nuevoMensaje.dispositivoId);
    if (indice !== -1) {
        // Si se encuentra un mensaje con el mismo dispositivoId, reemplazarlo.
        this.mensajes[indice] = nuevoMensaje;
    } else {
        // Si no se encuentra, agregar el nuevo mensaje al arreglo.
        this.mensajes.push(nuevoMensaje);
    }
  }

}
