import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MigajaspanComponent } from './migajaspan/migajaspan.component';
import { BusquedasComponent } from './busquedas/busquedas.component';

@NgModule({
  declarations: [MigajaspanComponent, BusquedasComponent],
  exports:[MigajaspanComponent] ,
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SharedModule { }
