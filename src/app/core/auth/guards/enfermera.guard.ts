import { CanActivateFn, Router } from '@angular/router';
import { AutenticacionService } from '../../../services/autenticacion/autenticacion.service';
import { inject } from '@angular/core';
import { Subject, of, takeUntil } from 'rxjs';
import { Usuario } from 'app/models/Usuario';

export const EnfermeraGuard: CanActivateFn = (route, state) => {
  const autenticacionService = inject(AutenticacionService);
  const router = inject(Router);

  const unsubscribeAll = new Subject<any>();

  let usuarioChecar = new Usuario();
  autenticacionService.usuario$
        .pipe(takeUntil(unsubscribeAll))
        .subscribe((usuario:Usuario)=>{
          usuarioChecar = usuario;
        })
  console.log(usuarioChecar)      
    
  if(usuarioChecar._id === undefined || usuarioChecar.email === undefined){
    usuarioChecar = JSON.parse(localStorage.getItem('usuario'))
  }
  console.log('entre')
  if(usuarioChecar.role === 'ENFERMERA'){    
    return of(true);
  }else{
    console.log(autenticacionService.menu[0].link)
    router.navigateByUrl(autenticacionService.menu[0].link);
    return of(false);
  }
  
  
  
};
