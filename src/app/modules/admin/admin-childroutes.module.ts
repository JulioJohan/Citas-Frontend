import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './dashboards/project/project.component';
import { AnalyticsComponent } from './dashboards/analytics/analytics.component';
import { FinanceComponent } from './dashboards/finance/finance.component';
import { CryptoComponent } from './dashboards/crypto/crypto.component';
import { DevicesComponent } from './dashboards/devices/devices.component';
import { ExampleComponent } from './example/example.component';

const childRoutes:Routes = [
    {path: 'project', component:ProjectComponent},
    {path: 'analytics', component:AnalyticsComponent},
    {path: 'finance', component:FinanceComponent},
    {path: 'crypto', component:CryptoComponent},
    {path:'example',component: ExampleComponent},
    {path: 'devices', component:DevicesComponent}
]

@NgModule({
    imports: [ RouterModule.forChild(childRoutes)],
    exports: [ RouterModule ]
})

export class AdminChildRoutesModule {}