import { Component, OnInit  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-conoce-mas',
  templateUrl: './conoce-mas.component.html',
  styleUrls: ['./conoce-mas.component.scss']
})
export class ConoceMasComponent {

    currentRouteHome = '/home-nuevo'
    currentRouteConoce = '/conoce-mas'

    navbarOpen = false;
    movile = window.innerWidth < 1024;

    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }

    ngOnInit() {
        // Escuchar cambios de tamaño de pantalla para ajustar la visibilidad del navbar
        window.addEventListener('resize', () => {
          this.movile = window.innerWidth < 1024;
          if (!this.movile) {
            this.navbarOpen = false;
          }
        });
    }
}
