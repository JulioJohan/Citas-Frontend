import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { AutenticacionService } from 'app/services/autenticacion/autenticacion.service';


@Component({
    selector     : 'auth-confirmation-required',
    templateUrl  : './confirmation-required.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations,
})
export class AuthConfirmationRequiredComponent implements OnInit
{
    parametroTokenValidacion:string = "";

    /**
     * Constructor
     */
    constructor(
        private route: ActivatedRoute,
        private autenticacionService: AutenticacionService,
        private router:Router
    )
    {
    }

    ngOnInit(): void {
        this.verificarTokenEmail();
    }

    verificarTokenEmail(){
        this.parametroTokenValidacion = this.route.snapshot.paramMap.get('tokenDoble')!;
        console.log("Token"+this.parametroTokenValidacion);
        this.autenticacionService.confirmarCuentaEmail(this.parametroTokenValidacion).subscribe(data=>{
          console.log(data)
          if(!data.ok){

            this.router.navigateByUrl(`/users/reset-password/${this.parametroTokenValidacion}`)
          }
          if(data.ok){
            this.router.navigateByUrl('/users/sign-in')
          }
        })
      }


}
