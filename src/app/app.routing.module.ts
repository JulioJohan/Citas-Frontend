import { Routes, RouterModule } from '@angular/router';
import { NgModule, inject } from '@angular/core';
import { AuthRoutingModule } from './modules/auth/auth.routing';
import { ExampleComponent } from './modules/admin/example/example.component';
import { AdminRoutingModule } from './modules/admin/admin.routes';
import { LandingHomeComponent } from './modules/landing/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { appRoutes } from './app.routes';
import { AuthGuard } from './core/auth/guards/auth.guard';
import { AlmacenComponent } from './modules/admin/dashboards/almacen/almacen.component';
import { RegActMedicinaComponent } from './modules/admin/dashboards/reg-act-medicina/reg-act-medicina.component';
import { ListarMedicinasComponent } from './modules/admin/dashboards/listar-medicinas/listar-medicinas.component';
import { HomeRoutingModule } from './modules/home/home.routing.module';
import { AutenticacionService } from './services/autenticacion/autenticacion.service';
import { NoAuthGuard } from './core/auth/guards/noAuth.guard';




const routes: Routes = [
    {path: '', pathMatch : 'full', redirectTo: 'users/home-nuevo',},
    {path: '**', pathMatch : 'full', redirectTo: 'pagina-no-encontrada'},
    // {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: '/dashboards'},

    // {path: 'example', component:ExampleComponent},


    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
        AuthRoutingModule,
        AdminRoutingModule,
        HomeRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
