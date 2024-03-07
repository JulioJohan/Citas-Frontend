import { Component, ViewChild, HostListener } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MapaSitioComponent } from '../mapa-sitio/mapa-sitio.component';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

    // Rutas de los breadcrumbs
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



}
