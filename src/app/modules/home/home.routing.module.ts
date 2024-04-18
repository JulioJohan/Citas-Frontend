import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutComponent } from 'app/layout/layout.component';
import { HomeComponent } from "./home/home.component";
import { ConoceMasComponent } from "./conoce-mas/conoce-mas.component";
import { PaginaNoEncontradaComponent } from "./pagina-no-encontrada/pagina-no-encontrada.component";
import { AdministradorDashboardComponent } from "../admin/dashboards/administrador-dashboard/administrador-dashboard.component";
import { PacienteDashboardComponent } from "../admin/dashboards/paciente-dashboard/paciente-dashboard.component";
import { MapaSitioComponent } from "./mapa-sitio/mapa-sitio.component";
import { AuthGuard } from "app/core/auth/guards/auth.guard";


const rutasHome =  [

   {path: 'home-nuevo', component:HomeComponent},
   {path: 'conoce-mas',  component:ConoceMasComponent},
   {path: 'administrador-dashboard', component:AdministradorDashboardComponent},
   {path: 'paciente-dashboard', component:PacienteDashboardComponent},
   {path: 'pagina-no-encontrada', component:PaginaNoEncontradaComponent},
   {path: 'mapa-sitio', component:MapaSitioComponent}
]

@NgModule({
    imports: [ RouterModule.forChild(rutasHome)],
    exports: [ RouterModule ]
})
export class HomeRoutingModule{}
