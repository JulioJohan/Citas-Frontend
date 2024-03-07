import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthConfirmationRequiredComponent } from './confirmation-required/confirmation-required.component';
import { AuthForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthSignInComponent } from './sign-in/sign-in.component';
import { AuthSignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from "app/core/auth/guards/auth.guard";
import { AuthSignOutComponent } from "./sign-out/sign-out.component";
import { AuthUnlockSessionComponent } from "./unlock-session/unlock-session.component";
import { HomeComponent } from '../home/home/home.component';
import { MapaSitioComponent } from "../home/mapa-sitio/mapa-sitio.component";

const childRoutes:Routes = [
    {path: 'confirmation-required',component: AuthConfirmationRequiredComponent},
    {path: 'forgot-password', component:AuthForgotPasswordComponent},
    {path: 'reset-password', component: AuthResetPasswordComponent},
    {path: 'sign-in', component:AuthSignInComponent },
    {path: 'home-nuevo', component:HomeComponent},
    {path: 'mapa-sitio', component:MapaSitioComponent},

    {path: 'sign-up', component:AuthSignUpComponent},
    // Auth routes for authenticated users

]


@NgModule({
    imports: [ RouterModule.forChild(childRoutes)],
    exports: [ RouterModule ]
})

export class AuthChildRoutesModule{}
