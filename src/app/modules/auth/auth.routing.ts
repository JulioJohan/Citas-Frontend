import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { AuthSignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { AuthSignOutComponent } from './sign-out/sign-out.component';
import { AuthUnlockSessionComponent } from './unlock-session/unlock-session.component';


const routes:Routes = [
    
    {    
        path: 'users',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,     
        data: {
            layout: 'empty'
        },  
        loadChildren:() => import('./authchild-routes.module').then(m=> m.AuthChildRoutesModule)       
    },
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,     
        data: {
            layout: 'empty'
        },  
            // autenticacion con guardia 
        children: [
            {path: 'sign-out', component:AuthSignOutComponent},
            {path: 'unlock-session', component:AuthUnlockSessionComponent}
        ]
    },
   
    // {path: 'sign-in', component:AuthSignInComponent },

]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
