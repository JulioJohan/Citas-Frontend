import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, CurrencyPipe, DecimalPipe, I18nPluralPipe, NgClass, NgFor, UpperCasePipe } from '@angular/common';
import { AnalyticsComponent } from './dashboards/analytics/analytics.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TranslocoModule } from '@ngneat/transloco';
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';  
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FuseAlertComponent } from '@fuse/components/alert';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NuevoPacienteComponent } from './dashboards/cita/nuevo-paciente/nuevo-paciente.component';
import { NumberDirective } from 'app/directives/number-only.directive';
import { LetterDirective } from 'app/directives/letter.directive';
import { DecimalDirective } from 'app/directives/decimal.directive';

import { ActualizarUsuarioComponent } from './dashboards/adminitrador-usuarios/actualizar-usuario/actualizar-usuario.component';
import { AdminitradorUsuariosComponent } from './dashboards/adminitrador-usuarios/adminitrador-usuarios.component';
import { CitaComponent } from './dashboards/cita/cita.component';
import { CitaAgendadaComponent } from './dashboards/cita-agendada/cita-agendada.component';
import { CrearUsuarioComponent } from './dashboards/adminitrador-usuarios/crear-usuario/crear-usuario.component';
import { CryptoComponent } from './dashboards/crypto/crypto.component';
import { DevicesComponent } from './dashboards/devices/devices.component';
import { FinanceComponent } from './dashboards/finance/finance.component';
import { ProjectComponent } from './dashboards/project/project.component';
import { DetalleCitaComponent } from './dashboards/cita-agendada/detalle-cita/detalle-cita.component';
import { HistorialMedicoComponent } from './dashboards/cita/historial-medico/historial-medico.component';
import { ListarMedicinasComponent } from './dashboards/listar-medicinas/listar-medicinas.component';
import { RegActMedicinaComponent } from './dashboards/reg-act-medicina/reg-act-medicina.component';
import { RouterLink } from '@angular/router';
import { AlmacenComponent } from './dashboards/almacen/almacen.component';
import { SharedModule } from '../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    ActualizarUsuarioComponent,
    AdminitradorUsuariosComponent,
    AnalyticsComponent,
    AlmacenComponent,
    CitaComponent,
    CitaAgendadaComponent,
    CrearUsuarioComponent,
    CryptoComponent,
    DecimalDirective,
    DetalleCitaComponent,
    HistorialMedicoComponent,
    DevicesComponent,
    FinanceComponent,
    ProjectComponent,    
    NuevoPacienteComponent,
    NumberDirective,
    LetterDirective,
    ListarMedicinasComponent,
    RegActMedicinaComponent

  ],
  imports: [
    AsyncPipe,
    BrowserModule,    
    CommonModule,
    CurrencyPipe,
    DecimalPipe,    
    FormsModule,
    FuseAlertComponent,
    NgFor,  
    NgClass,  
    I18nPluralPipe,
    RouterLink,    
    NgApexchartsModule,
    NgxMatTimepickerModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDividerModule,
    MatDialogModule,    
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatRippleModule,
    MatProgressBarModule,
    MatTabsModule,
    MatTableModule,
    MatToolbarModule,
    MatSelectModule,
    MatStepperModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatProgressSpinnerModule, 
    ReactiveFormsModule,
    TranslocoModule,
    UpperCasePipe,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    SharedModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AdminModule { }
