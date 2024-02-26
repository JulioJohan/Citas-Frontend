import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { AutenticacionService } from 'app/services/autenticacion/autenticacion.service';
import { of, switchMap } from 'rxjs';

export const AuthGuard: CanActivateFn | CanActivateChildFn = (route, state) =>
{
    const router: Router = inject(Router);

    // Check the authentication status
    return inject(AutenticacionService).checarAutenticacion().pipe(
        switchMap((authenticated) =>
        {
            // If the user is not authenticated...
            if ( !authenticated )
            {
                console.log('entre')

                console.log(state.url)
                // Redirect to the sign-in page with a redirectUrl param
                const redirectURL = state.url === '/users/sign-out' ? '' : `redirectURL=${state.url}`;
                const urlTree = router.parseUrl(`/users/home-nuevo?${redirectURL}`);
                const urlTree1 = router.parseUrl(`/users/home-nuevo`);
                console.log(urlTree1)
                return of(urlTree1);
            }

            // console.log(JSON.parse(localStorage.getItem('menu'))

            // Allow the access
            return of(true);
        }),
    );
};
