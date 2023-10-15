import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { AutenticacionService } from 'app/services/autenticacion/autenticacion.service';
import { of, switchMap } from 'rxjs';


export const NoAuthGuard: CanActivateFn | CanActivateChildFn = (route, state) =>
{
    const router: Router = inject(Router);
    JSON.parse(localStorage.getItem('menu'))

    // Check the authentication status
    return inject(AutenticacionService).checarAutenticacion().pipe(
        switchMap((authenticated) =>
        {               
            // If the user is authenticated...
            if ( authenticated )
            {
                console.log(authenticated)
                return of(router.parseUrl(JSON.parse(localStorage.getItem('menu')) ?? 'users/sign-in'));
            }

            // Allow the access
            return of(true);
        }),
    );
};
