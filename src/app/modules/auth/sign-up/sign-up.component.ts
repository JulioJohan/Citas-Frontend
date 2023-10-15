import { NgIf } from '@angular/common';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormsModule, NgForm, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertComponent, FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { AutenticacionService } from '../../../services/autenticacion/autenticacion.service';
import { Respuesta } from 'app/models/Respuesta';
import { Usuario } from 'app/models/Usuario';
import { EspecialidadService } from 'app/services/especialidad/especialidad.service';
import { Especialidad } from '../../../models/Especialidad';
import { Rol } from 'app/enums/Rol';


@Component({
    selector     : 'auth-sign-up',
    templateUrl  : './sign-up.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations,    
})
export class AuthSignUpComponent implements OnInit
{

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _autenticacionService:AutenticacionService,
        private _formBuilder: UntypedFormBuilder,
        private _router: Router,
        private _especialidadService:EspecialidadService
    )
    {
    }
    
    @ViewChild('signUpNgForm') signUpNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: '',
    };
    signUpForm: UntypedFormGroup;
    showAlert: boolean = false;
    public especialidades:Especialidad[] = [];
    public formularioRegistro:FormGroup;

   
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
  
    /**
     * On init
     */
    ngOnInit(): void
    {
        this.formularioRegistro = this._formBuilder.group({
            name:        ['',[Validators.required]],
            email:       ['',[Validators.required, Validators.email]],
            password:    ['',[Validators.required]],
            role:        ['',[Validators.required]],
            especialidad:[''],
        })
    
        this.obtenerDispositivos();      
        this.validarRolFormulario();
    }

    private validarRolFormulario(){
        this.formularioRegistro.get('role').valueChanges.subscribe((role)=>{
            if(role === Rol.ENFERMERA){
                this.formularioRegistro.get('especialidad').clearValidators();;
            }
            if(role === Rol.DOCTOR){
                this.formularioRegistro.get('especialidad').setValidators([Validators.required]);
            }
            this.formularioRegistro.get('especialidad').updateValueAndValidity();

        })
    }
    private obtenerDispositivos(){
        this._especialidadService.obtenerEspecialidades().subscribe((respuesta)=>{           
            this.especialidades = respuesta.data;              

        })  
    }

    private errorRespuesta(error:string){
         // Re-enable the form
         this.formularioRegistro.enable();

         // Reset the form
         this.formularioRegistro.reset();

         // Set the alert
         this.alert = {
             type   : 'error',
             message: error,
         };

         // Show the alert
         this.showAlert = true;
    }

    // public navegar(){
    //     this._router.navigateByUrl('dashboards/devices')
    // }

    public registrarUsuario(){
        this.formularioRegistro.disable();
        this.showAlert = false;
        const usuario = new Usuario();
        usuario.name = this.formularioRegistro.get('name').value;        
        usuario.especialidad = this.formularioRegistro.get('especialidad').value !== '' ? this.formularioRegistro.get('especialidad').value :null ;
        usuario.email = this.formularioRegistro.get('email').value;
        usuario.password = this.formularioRegistro.get('password').value;
        usuario.role = this.formularioRegistro.get('role').value;
        this._autenticacionService.registrarUsuario(usuario).subscribe({       
        next:(respuesta:Respuesta) =>{
            this.formularioRegistro.reset();
            this.showAlert = true;
             // Set the alert
             this.alert = {
                type   : 'success',
                message: respuesta.msg,
            };

            this._autenticacionService.decodificarPorId(respuesta.data);          

        },
        error:(error)=>{
            this.errorRespuesta(error.error.msg)
        }          
        })
    
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign up
     */
    signUp(): void
    {
        // Do nothing if the form is invalid
        if ( this.signUpForm.invalid )
        {
            return;
        }

        // Disable the form
        this.signUpForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Sign up
        this._authService.signUp(this.signUpForm.value)
            .subscribe(
                (response) =>
                {
                    // Navigate to the confirmation required page
                    this._router.navigateByUrl('/confirmation-required');
                },
                (response) =>
                {
                    // Re-enable the form
                    this.signUpForm.enable();

                    // Reset the form
                    this.signUpNgForm.resetForm();

                    // Set the alert
                    this.alert = {
                        type   : 'error',
                        message: 'Something went wrong, please try again.',
                    };

                    // Show the alert
                    this.showAlert = true;
                },
            );
    }
}
