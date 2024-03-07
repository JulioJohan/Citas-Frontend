import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterLink, RouterModule } from "@angular/router";
import { FuseAlertComponent } from "@fuse/components/alert";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from "./home/home.component";
import { ConoceMasComponent } from "./conoce-mas/conoce-mas.component";
import { PaginaNoEncontradaComponent } from "./pagina-no-encontrada/pagina-no-encontrada.component";
import { MapaSitioComponent } from "./mapa-sitio/mapa-sitio.component";



@NgModule({
declarations:[

    HomeComponent,
    ConoceMasComponent,
    PaginaNoEncontradaComponent,
    MapaSitioComponent

],
imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    // LayoutModule,

    FormsModule,
    FuseAlertComponent,
    RouterLink,
    RouterModule,
    ReactiveFormsModule,


],
})
export class HomeModule {}
