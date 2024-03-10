import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class MenuService{

    constructor( private router:Router){}

    public menu:any = []

    cargarMenu(){
        this.menu = JSON.parse(localStorage.getItem('menu')!);

        if(this.menu.length === 0){
          this.router.navigateByUrl('/users/sign-in');
        }
    }
}
