import { NgIf } from '@angular/common';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertComponent, FuseAlertType } from '@fuse/components/alert';
import { FuseValidators } from '@fuse/validators';
import { AuthService } from 'app/core/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticacionService } from 'app/services/autenticacion/autenticacion.service';
import { NuevoPassword } from '../../../models/nuevo-Password';
import { finalize } from 'rxjs';

@Component({
    selector     : 'auth-reset-password',
    templateUrl  : './reset-password.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations,
})
export class AuthResetPasswordComponent implements OnInit
{
    @ViewChild('resetPasswordNgForm') resetPasswordNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: '',
    };
    resetPasswordForm: UntypedFormGroup;
    showAlert: boolean = false;

    public tokenDoble:string = '';
    public nuevoPassword:NuevoPassword = new NuevoPassword();

    /**
     * Constructor
     */
    constructor(
        private _authService: AutenticacionService,
        private _formBuilder: UntypedFormBuilder,
        private router:Router,
        private route: ActivatedRoute,
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Create the form
        this.resetPasswordForm = this._formBuilder.group({
                password       : ['', Validators.required],
                passwordConfirm: ['', Validators.required],
            },
            {
                validators: FuseValidators.mustMatch('password', 'passwordConfirm'),
            },
        );

        this.tokenDoble = this.route.snapshot.paramMap.get('tokenDoble')!;
        this.validacionTokenPassword(this.tokenDoble)
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------


    // Validar token
    validacionTokenPassword(token:string){
        return this._authService.comprobarTokenPassword(token).subscribe(data=>{
          console.log(data);
          if(!data.ok){
            this.alert = {
                type: 'error',
                message: 'Token no válido. Por favor, solicite un nuevo enlace.'
            };
            this.showAlert = true;
      setTimeout(() => {
        this.router.navigateByUrl('/users/sign-in');
      }, 5000); // espera 5 segundos antes de redirigir
        }
      });

    }

    /**
     * Reset password
     */
    resetPassword(): void
    {
        // Return if the form is invalid
        if ( this.resetPasswordForm.invalid )
        {
            return;
        }

        // Disable the form
        this.resetPasswordForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Send the request to the server
        this._authService.nuevoPassword(this.tokenDoble, this.resetPasswordForm.value)
            .pipe(
                finalize(() =>
                {
                    // Re-enable the form
                    this.resetPasswordForm.enable();

                    // Reset the form
                    this.resetPasswordNgForm.resetForm();

                    // Show the alert
                    this.showAlert = true;
                }),
            )
            .subscribe(
                (response) =>
                {
                    // Set the alert
                    this.alert = {
                        type   : 'success',
                        message: response.msg,
                    };
                    setTimeout(() => {
                        this.router.navigateByUrl('/users/sign-in');
                      }, 3000); // espera 5 segundos antes de redirigir
                },
                (response) =>
                {
                    // Set the alert
                    this.alert = {
                        type   : 'error',
                        message: response.error.msg,
                    };
                    setTimeout(() => {
                        this.router.navigateByUrl('/users/sign-in');
                      }, 3000); 
                },
            );
    }
}
