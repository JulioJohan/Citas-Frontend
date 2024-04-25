import { Component, ViewChild, HostListener } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MapaSitioComponent } from '../mapa-sitio/mapa-sitio.component';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent{

    // Rutas de los breadcrumbs
    currentRouteHome = '/home-nuevo'
    currentRouteConoce = '/conoce-mas'


	navbarOpen = false;
    movile = window.innerWidth < 1024;
    showScrollTopButton = false;
    isHighlighted = false;




    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }

    ngOnInit() {
        const string:string =  "Hola!";
        console.log(string)
        // Escuchar cambios de tamaño de pantalla para ajustar la visibilidad del navbar
        window.addEventListener('resize', () => {
          this.movile = window.innerWidth < 1024;
          
          if (!this.movile) {
            this.navbarOpen = false;
          }
        });
    }

    // Implementacion de carrousel
    imagesURL = [
        'doctor1.jpg',
        'doctor2.jpg',
        'doctor3.jpg',
        'doctor4.jpg'
    ];

    imagesNum = [0,1,2,3];

    images = this.imagesNum.map((n) => `assets/images/hospital/${this.imagesURL[n]}`);


	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

	@ViewChild('carousel', { static: true }) carousel: NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
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
