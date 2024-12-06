import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SwPush } from '@angular/service-worker';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { TokenService } from './services/token/token.service';


@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss'],
})
export class AppComponent {

    private readonly VAPID_PUBLIC_KEY:string = 'BIlWKRxRCjukcYNwwi1eKPnspm7_A1HFrjI9KkFiIo-7Acj3iJOLqyEXSvhNUTiNT4B5_p9S2zOEL4bCemhHzn4'; 

    constructor(private serviceWorkerPush:SwPush,private tokenService:TokenService){
        this.suscribeNotifications()
    }

    public suscribeNotifications():void{
        console.log('suscribeNotifications')
        this.serviceWorkerPush.requestSubscription({
            serverPublicKey: this.VAPID_PUBLIC_KEY
        }).then((subscribe) => {
            const tokenString = JSON.stringify(subscribe);
            const tokenJson = JSON.parse(tokenString);
            console.log(tokenJson)
            console.log('ojojooo ', tokenJson);
            localStorage.setItem('tokenNotificacion',tokenString);
            this.tokenService.saveToken(tokenJson).subscribe((data) =>{
                console.log('correct post');
                console.log(data);
            
            const token = localStorage.getItem('tokenNotificacion');
            const tokenJson = JSON.parse(token);
            console.log('token',token)
            console.log('tokenJson',tokenJson)
            this.tokenService.sendPush(tokenJson).subscribe(
                response => {
                  console.log('Notification sent successfully:', response);
                },
                error => {
                  console.error('Error sending notification:', error);
                }
              );
            },(error:any)=>{
                console.error('error',error)
            });    
        }).catch((error)=> console.error('upps :(', error));
    }

    

}
