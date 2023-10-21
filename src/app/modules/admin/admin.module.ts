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

import { CitaComponent } from './dashboards/cita/cita.component';
import { CitaAgendadaComponent } from './dashboards/cita-agendada/cita-agendada.component';
import { CryptoComponent } from './dashboards/crypto/crypto.component';
import { DevicesComponent } from './dashboards/devices/devices.component';
import { FinanceComponent } from './dashboards/finance/finance.component';
import { ProjectComponent } from './dashboards/project/project.component';
import { DetalleCitaComponent } from './dashboards/cita-agendada/detalle-cita/detalle-cita.component';
import { HistorialMedicoComponent } from './dashboards/cita/historial-medico/historial-medico.component';

@NgModule({
  declarations: [
    
    AnalyticsComponent,
    CitaComponent,
    CitaAgendadaComponent,
    CryptoComponent,
    DecimalDirective,
    DetalleCitaComponent,
    HistorialMedicoComponent,
    DevicesComponent,
    FinanceComponent,
    ProjectComponent,    
    NuevoPacienteComponent,
    NumberDirective,
    LetterDirective

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
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AdminModule { }
