import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutComponent } from 'app/layout/layout.component';
import { HomeComponent } from "./home/home.component";
import { ConoceMasComponent } from "./conoce-mas/conoce-mas.component";


const rutasHome =  [

   {path: 'home-nuevo', component:HomeComponent},
   {path: 'conoce-mas',  component:ConoceMasComponent}
]

@NgModule({
    imports: [ RouterModule.forChild(rutasHome)],
    exports: [ RouterModule ]
})
export class HomeRoutingModule{}
