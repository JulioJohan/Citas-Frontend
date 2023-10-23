import { Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { initialDataResolver } from 'app/app.resolvers';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { AuthConfirmationRequiredComponent } from './modules/auth/confirmation-required/confirmation-required.component';
import { AuthForgotPasswordComponent } from './modules/auth/forgot-password/forgot-password.component';
import { AuthResetPasswordComponent } from './modules/auth/reset-password/reset-password.component';
import { AuthSignInComponent } from './modules/auth/sign-in/sign-in.component';
import { AuthSignUpComponent } from './modules/auth/sign-up/sign-up.component';
import { AuthSignOutComponent } from './modules/auth/sign-out/sign-out.component';
import { AuthUnlockSessionComponent } from './modules/auth/unlock-session/unlock-session.component';
import { LandingHomeComponent } from './modules/landing/home/home.component';
import { ProjectComponent } from './modules/admin/dashboards/project/project.component';
import { AnalyticsComponent } from './modules/admin/dashboards/analytics/analytics.component';
import { CryptoComponent } from './modules/admin/dashboards/crypto/crypto.component';
import { DevicesComponent } from './modules/admin/dashboards/devices/devices.component';
import { FinanceComponent } from './modules/admin/dashboards/finance/finance.component';
import { RegActMedicinaComponent } from './modules/admin/dashboards/reg-act-medicina/reg-act-medicina.component';
import { ListarMedicinasComponent } from './modules/admin/dashboards/listar-medicinas/listar-medicinas.component';
import { AlmacenComponent } from './modules/admin/dashboards/almacen/almacen.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// TODO: Rutas de la version anterior 
export const appRoutes: Route[] = [
    
    //Rutas Gestión Medicamentos
    { path:'almacen', component: AlmacenComponent },
    { path:'reg-medicina', component: RegActMedicinaComponent },
    { path:'act-medicina/:id', component: RegActMedicinaComponent },
    { path:'listar-medicina', component: ListarMedicinasComponent },


    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: 'example'},

    // Redirect signed-in user to the '/example'
    //
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'example'},

    // Auth routes for guests
    // {
    //     path: '',
    //     canActivate: [NoAuthGuard],
    //     canActivateChild: [NoAuthGuard],
    //     component: LayoutComponent,
    //     data: {
    //         layout: 'empty'
    //     },
    //     children: [
    //         // {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.routes')},
    //         // {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.routes')},
    //         // {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.routes')},
    //         // {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.routes')},
    //         // {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.routes')}
    //     ]
    // },
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required',component: AuthConfirmationRequiredComponent},
            {path: 'forgot-password', component:AuthForgotPasswordComponent},
            {path: 'reset-password', component: AuthResetPasswordComponent},
            {path: 'sign-in', component:AuthSignInComponent },
            {path: 'sign-up', component:AuthSignUpComponent},
            { path:'almacen', component: AlmacenComponent },
            { path:'reg-medicina', component: RegActMedicinaComponent },
            { path:'act-medicina/:id', component: RegActMedicinaComponent },
            { path:'listar-medicina', component: ListarMedicinasComponent }
        ]
    },

    // Auth routes for authenticated users
    // {
    //     path: '',
    //     canActivate: [AuthGuard],
    //     canActivateChild: [AuthGuard],
    //     component: LayoutComponent,
    //     data: {
    //         layout: 'empty'
    //     },
    //     children: [
    //         // {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.routes')},
    //         // {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.routes')}
    //     ]
    // },

    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', component:AuthSignOutComponent},
            {path: 'unlock-session', component:AuthUnlockSessionComponent}
        ]
    },

    // Landing routes
    // {
    //     path: '',
    //     component: LayoutComponent,
    //     data: {
    //         layout: 'empty'
    //     },
    //     children: [
    //         {path: 'home', loadChildren: () => import('app/modules/landing/home/home.routes')},
    //     ]
    // },

    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'home', component:LandingHomeComponent},
        ]
    },

    // Admin routes
    // {
    //     path: '',
    //     canActivate: [AuthGuard],
    //     canActivateChild: [AuthGuard],
    //     component: LayoutComponent,
    //     resolve: {
    //         initialData: initialDataResolver
    //     },
    //     children: [
            // {path: 'example', loadChildren: () => import('app/modules/admin/example/example.routes')},

    //         // Dashboards
    //         {path: 'dashboards', children: [
    //             {path: 'project', loadChildren: () => import('app/modules/admin/dashboards/project/project.routes')},
    //             {path: 'analytics', loadChildren: () => import('app/modules/admin/dashboards/analytics/analytics.routes')},
    //             {path: 'finance', loadChildren: () => import('app/modules/admin/dashboards/finance/finance.routes')},
    //             {path: 'crypto', loadChildren: () => import('app/modules/admin/dashboards/crypto/crypto.routes')},
    //             {path: 'dispositivos', loadChildren: () => import('app/modules/admin/dashboards/devices/devices.routes')}
    //         ]},
            
    //     ]
    // }

     {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        children: [
            {path: 'example', loadChildren: () => import('app/modules/admin/example/example.routes')},

            // Dashboards
            {path: 'dashboards', children: [
                {path: 'project', component:ProjectComponent},
                {path: 'analytics', component:AnalyticsComponent},
                {path: 'finance', component:FinanceComponent},
                {path: 'crypto', component:CryptoComponent},
                {path: 'dispositivos', component:DevicesComponent},
                // {path: 'cita', component:CitaComponent}
            ]},
            
        ]
    }
];
