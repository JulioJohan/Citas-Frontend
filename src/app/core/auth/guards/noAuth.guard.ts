import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { AutenticacionService } from 'app/services/autenticacion/autenticacion.service';
import { catchError, map, of, switchMap, tap } from 'rxjs';


export const NoAuthGuard: CanActivateFn | CanActivateChildFn = (route, state) =>
{
    const router: Router = inject(Router);

    // Check the authentication status
    return inject(AutenticacionService).checarAutenticacion().pipe(
        switchMap((authenticated) =>
        {
            console.log("authenticated" +authenticated)
            // If the user is authenticated...
            if ( authenticated )
            {
                console.log("")
                const routeMenuUser = router.parseUrl(JSON.parse(localStorage.getItem('menu'))[0].link)
                return of(routeMenuUser);
            }
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

            // Allow the access
            return of(true);
        }),
    );
};


export const NoAuthGuard1: CanActivateFn | CanActivateChildFn = (route, state) =>
{
    const router: Router = inject(Router);

    // Check the authentication status
    return inject(AutenticacionService).checarAutenticacion().pipe(
        map(data => {
            console.log("data"+data)
            // If the authentication check is successful, allow access
            return true;
        }),
        catchError(error => {
            // If there is an error, allow access
            return of(true);
        })
    );
    
     
};
