import { NgIf } from '@angular/common';
import { Component, OnInit, ViewChild, ViewEncapsulation, AfterViewInit, ElementRef } from '@angular/core';
import { FormGroup, FormsModule, NgForm, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertComponent, FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { Usuario } from 'app/models/Usuario';
import { AutenticacionService } from 'app/services/autenticacion/autenticacion.service';
import { UsuarioService } from '../../../services/usuario/usuario.service';

declare const google:any;
@Component({
    selector     : 'auth-sign-in',
    templateUrl  : './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations,
})
export class AuthSignInComponent implements OnInit, AfterViewInit
{
    @ViewChild('signInNgForm') signInNgForm: NgForm;
    @ViewChild('googleBtn') googleBtn:ElementRef;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: '',
    };
    signInForm: UntypedFormGroup;
    inicioFormulario:FormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _autenticacionService:AutenticacionService,
        private _formBuilder: UntypedFormBuilder,
        private _router: Router,
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
        // this.signInForm = this._formBuilder.group({
        //     email     : ['hughes.brian@company.com', [Validators.required, Validators.email]],
        //     password  : ['admin', Validators.required],
        //     rememberMe: [''],
        // });
        this.inicioFormulario = this._formBuilder.group({
            email   :['',[Validators.required,Validators.email]],
            password:['',[Validators.required]]
        })
        console.log('AuthSignInComponent')
    }
    public almacen(){
        this._router.navigateByUrl('/almacen')
    }

    private errorRespuesta(error:string){
        // Re-enable the form
        this.inicioFormulario.enable();

        // Reset the form
        this.inicioFormulario.reset();

        // Set the alert
        this.alert = {
            type   : 'error',
            message: error,
        };

        // Show the alert
        this.showAlert = true;
   }


    inicioSesion(){
        this.inicioFormulario.disable();
        this.showAlert = false;
        const usuario = new Usuario();
        usuario.email = this.inicioFormulario.get('email').value;
        usuario.password = this.inicioFormulario.get('password').value;
        this._autenticacionService.iniciarSesion(usuario).subscribe((respuesta)=>{
            console.log(respuesta)
            this._autenticacionService.checharLocalStorage();
            this._autenticacionService.decodificarPorId(respuesta);
            this.inicioFormulario.reset();
            this.showAlert = true;
            // Set the alert
            this.alert = {
               type   : 'success',
               message: respuesta.msg,
            };
        },
        (error:any) =>{
            this.errorRespuesta(error.error.msg)
        })

    }

    ngAfterViewInit(): void{
        this.googleInit();
    }

    googleInit(){
        console.log( {data: this} )
        google.accounts.id.initialize({
            client_id: "151080076906-g0toq2db3v9os3fa1rv7maa7209ivndg.apps.googleusercontent.com",
            callback: ( response:any ) => this.handleCredentialResponse(response)
          });
          google.accounts.id.renderButton(
            // document.getElementById("buttonDiv"),
            this.googleBtn.nativeElement,
            { theme: "outline", size: "large" }  // customization attributes
          );
    }

    handleCredentialResponse( response:any ){
        console.log("Encoded JWT ID token: " + response.credential);
        this._autenticacionService.sesionGoogle( response.credential )
            .subscribe( resp => {
                console.log( {sesion:resp} )
            })
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    signIn(): void
    {
        // Return if the form is invalid
        if ( this.signInForm.invalid )
        {
            return;
        }

        // Disable the form
        this.signInForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Sign in
        this._authService.signIn(this.signInForm.value)
            .subscribe(
                () =>
                {
                    // Set the redirect url.
                    // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
                    // to the correct page after a successful sign in. This way, that url can be set via
                    // routing file and we don't have to touch here.
                    const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';

                    // Navigate to the redirect url
                    this._router.navigateByUrl(redirectURL);

                },
                (response) =>
                {
                    // Re-enable the form
                    this.signInForm.enable();

                    // Reset the form
                    this.signInNgForm.resetForm();

                    // Set the alert
                    this.alert = {
                        type   : 'error',
                        message: 'Wrong email or password',
                    };

                    // Show the alert
                    this.showAlert = true;
                },
            );
    }
}
