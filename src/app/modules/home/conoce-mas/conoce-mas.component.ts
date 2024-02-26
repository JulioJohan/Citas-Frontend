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
}
