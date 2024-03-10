import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MigajaspanComponent } from './migajaspan/migajaspan.component';



@NgModule({
  declarations: [MigajaspanComponent],
  exports:[MigajaspanComponent] ,
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
