import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DecimalPipe, NgClass, NgFor, UpperCasePipe } from '@angular/common';
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
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatHint } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    AnalyticsComponent,
    CryptoComponent,
    DevicesComponent,
    FinanceComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    CurrencyPipe,
    DecimalPipe,
    NgFor,  
    NgClass,  
    NgApexchartsModule,
    MatButtonModule,
    MatDividerModule,    
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatRippleModule,
    MatProgressBarModule,
    MatTabsModule,
    MatTableModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatTooltipModule,
    TranslocoModule,
    UpperCasePipe,
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AdminModule { }
