import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, I18nPluralPipe, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FuseAlertComponent } from '@fuse/components/alert';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Componentes
import { AuthConfirmationRequiredComponent } from './confirmation-required/confirmation-required.component';
import { AuthForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthSignInComponent } from './sign-in/sign-in.component';
import { AuthSignOutComponent } from './sign-out/sign-out.component';
import { AuthSignUpComponent } from './sign-up/sign-up.component';
import { AuthUnlockSessionComponent } from './unlock-session/unlock-session.component';
import { LayoutModule } from 'app/layout/layout.module';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
    declarations: [ 
        // Todo: Componentes
        AuthConfirmationRequiredComponent,
        AuthForgotPasswordComponent,
        AuthResetPasswordComponent,
        AuthSignInComponent,
        AuthSignOutComponent,
        AuthSignUpComponent,
        AuthUnlockSessionComponent,        

     ],
    imports: [ 
        BrowserModule,
        CommonModule,
        // LayoutModule,

        FormsModule,
        FuseAlertComponent,
        RouterLink,
        RouterModule,        
        ReactiveFormsModule,
        HttpClientModule,
        I18nPluralPipe,
        NgIf,    
        MatButtonModule,     
        MatCheckboxModule,
        MatFormFieldModule, 
        MatInputModule, 
        MatIconModule,
        MatSelectModule,
        MatProgressSpinnerModule, 
        
    ],
})
export class AuthModule {}