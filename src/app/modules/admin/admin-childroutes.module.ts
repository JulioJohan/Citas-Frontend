import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './dashboards/project/project.component';
import { AnalyticsComponent } from './dashboards/analytics/analytics.component';
import { FinanceComponent } from './dashboards/finance/finance.component';
import { CryptoComponent } from './dashboards/crypto/crypto.component';
import { DevicesComponent } from './dashboards/devices/devices.component';
import { ExampleComponent } from './example/example.component';
import { CitaComponent } from './dashboards/cita/cita.component';
import { ResgistroMedicoComponent } from './dashboards/resgistro-medico/resgistro-medico.component';
import { CitaAgendadaComponent } from './dashboards/cita-agendada/cita-agendada.component';
import { DoctorGuard } from 'app/core/auth/guards/doctor.guard';
import { EnfermeraGuard } from 'app/core/auth/guards/enfermera.guard';
import { HistorialMedicoComponent } from './dashboards/cita/historial-medico/historial-medico.component';
import { AlmacenComponent } from './dashboards/almacen/almacen.component';
import { RegActMedicinaComponent } from './dashboards/reg-act-medicina/reg-act-medicina.component';
import { ListarMedicinasComponent } from './dashboards/listar-medicinas/listar-medicinas.component';

const childRoutes:Routes = [
    {path: 'project', component:ProjectComponent},
    {path: 'analytics', component:AnalyticsComponent},
    {path: 'finance', component:FinanceComponent},
    {path: 'crypto', component:CryptoComponent},
    {path:'example',component: ExampleComponent},
    {path: 'devices', component:DevicesComponent},
    {path: 'cita', canActivate: [EnfermeraGuard], component:CitaComponent},    
    {path: 'historial_medico', canActivate: [EnfermeraGuard], component:HistorialMedicoComponent},    
    {path:'registro_medico',canActivate:[DoctorGuard] ,component:ResgistroMedicoComponent},
    {path:'cita_agendada',canActivate:[DoctorGuard],component:CitaAgendadaComponent},   
]

@NgModule({
    imports: [ RouterModule.forChild(childRoutes)],
    exports: [ RouterModule ]
})

export class AdminChildRoutesModule {}