import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, CurrencyPipe, DecimalPipe, I18nPluralPipe, NgClass, NgFor, UpperCasePipe } from '@angular/common';
import { AnalyticsComponent } from './dashboards/analytics/analytics.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CryptoComponent } from './dashboards/crypto/crypto.component';
import { DevicesComponent } from './dashboards/devices/devices.component';
import { FinanceComponent } from './dashboards/finance/finance.component';
import { ProjectComponent } from './dashboards/project/project.component';
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

import { CitaComponent } from './dashboards/cita/cita.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FuseAlertComponent } from '@fuse/components/alert';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NuevoPacienteComponent } from './dashboards/cita/nuevo-paciente/nuevo-paciente.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NumberDirective } from 'app/directives/number-only.directive';
import { LetterDirective } from 'app/directives/letter.directive';
import { DecimalDirective } from 'app/directives/decimal.directive';

@NgModule({
  declarations: [
    
    AnalyticsComponent,
    CitaComponent,
    CryptoComponent,
    DecimalDirective,
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
