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
import { PacienteDashboardComponent } from './dashboards/paciente-dashboard/paciente-dashboard.component';
import { MapaSitioComponent } from '../home/mapa-sitio/mapa-sitio.component';
import { AdministradorDashboardComponent } from './dashboards/administrador-dashboard/administrador-dashboard.component'
import { BusquedasComponent } from '../shared/busquedas/busquedas.component';

const childRoutes:Routes = [
    {path: 'project', component:ProjectComponent},
    {path: 'analytics', component:AnalyticsComponent},
    {path: 'finance', component:FinanceComponent},
    {path: 'crypto', component:CryptoComponent},
    {path:'example',component: ExampleComponent},
    {path: 'devices', component:DevicesComponent},
    {path: 'cita', canActivate: [EnfermeraGuard], component:CitaComponent, data:{titulo:'cita'}},
    {path: 'historial_medico', canActivate: [EnfermeraGuard], component:HistorialMedicoComponent,data:{titulo:'historial_medico'}},
    {path:'registro_medico',canActivate:[DoctorGuard] ,component:ResgistroMedicoComponent, data:{titulo:'registro_medico'}},
    {path:'cita_agendada',canActivate:[DoctorGuard],component:CitaAgendadaComponent, data:{titulo:'cita_agendada'}},
    {path: 'paciente-dashboard', component:PacienteDashboardComponent, data:{titulo:'paciente-dashboard'} },
    {path: 'mapa-sitio', component:MapaSitioComponent, data:{titulo:'mapa-sitio'}},
    {path: 'administrador-dashboard', component:AdministradorDashboardComponent},
    {path: 'buscar/:termino', canActivate:[DoctorGuard, EnfermeraGuard] ,component:BusquedasComponent, data:{ titulo: 'Busquedas globales'}},

]

@NgModule({
    imports: [ RouterModule.forChild(childRoutes)],
    exports: [ RouterModule ]
})

export class AdminChildRoutesModule {}
