import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './modules/auth/auth.routing';
import { ExampleComponent } from './modules/admin/example/example.component';
import { AdminRoutingModule } from './modules/admin/admin.routes';
import { LandingHomeComponent } from './modules/landing/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { appRoutes } from './app.routes';



const routes: Routes = [    
    {path: '', pathMatch : 'full', redirectTo: '/users/sign-in'},
    {path: '**', pathMatch : 'full', redirectTo: '/users/sign-in'},
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: '/dashboards'},   
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
        AdminRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
