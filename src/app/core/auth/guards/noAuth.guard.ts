import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { AutenticacionService } from 'app/services/autenticacion/autenticacion.service';
import { of, switchMap, tap } from 'rxjs';


export const NoAuthGuard: CanActivateFn | CanActivateChildFn = (route, state) =>
{
    const router: Router = inject(Router);

    // Check the authentication status
    return inject(AutenticacionService).checarAutenticacion().pipe(
        switchMap((authenticated) =>
        {
            // If the user is authenticated...
            if ( authenticated )
            {
                console.log('entre2')
                return of(router.parseUrl('/users/home'));
            }

            // Allow the access
            return of(true);
        }),
    );
};
