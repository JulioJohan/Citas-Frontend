import { Component } from '@angular/core';

@Component({
  selector: 'app-mapa-sitio2',
  templateUrl: './mapa-sitio2.component.html',
  styleUrl: './mapa-sitio2.component.scss'
})

export class MapaSitio2Component {

    constructor() { }

      handleButtonClick() {
        console.log('El botón ha sido clicado');
        
      }


}
