import { Component, OnInit , HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-conoce-mas',
  templateUrl: './conoce-mas.component.html',
  styleUrls: ['./conoce-mas.component.css']
})
export class ConoceMasComponent {

    currentRouteHome = '/home-nuevo'
    currentRouteConoce = '/conoce-mas'

    showScrollTopButton = false;
    isHighlighted = false;

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

    @HostListener('window:scroll', [])
    onWindowScroll() {
    // Detectar si el usuario ha llegado al final de la página
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset;
    const documentHeight = document.body.clientHeight;
    if (scrollY + windowHeight >= documentHeight) {

    }

    // Mostrar u ocultar el botón de "volver arriba"
    if (scrollY > 400) { // Cambia este valor según lo que consideres apropiado
      this.showScrollTopButton = true;
    } else {
      this.showScrollTopButton = false;
    }
  }

    scrollToTop() {
      // Método para hacer scroll hacia arriba cuando el usuario hace clic en el botón
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Eventos de mouse para los titulos
    highlight(shouldHighlight: boolean): void {
        console.log("evento del mouse " + this.isHighlighted)
        this.isHighlighted = shouldHighlight;
    }

}
