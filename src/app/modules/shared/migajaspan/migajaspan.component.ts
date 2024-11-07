import { Component, OnDestroy , OnInit} from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';


@Component({
  selector: 'app-migajaspan',
  templateUrl: './migajaspan.component.html',
  styleUrls: ['./migajaspan.component.scss']
})
export class MigajaspanComponent implements OnDestroy {

    public titulo!:string;
    //public seccion!:string;
    //public subseccion!:string;
    public inicio!:boolean;

    public tituloSubs$!:Subscription;


    constructor(private router:Router,private activatedRoute:ActivatedRoute){
        console.log("Hola de nuevo")
        this.tituloSubs$ =  this.getArgumentosRuta().
        subscribe(({titulo,seccion,subseccion})=>{
            console.log("me suscribi")
          this.titulo = titulo;
          titulo == "inicio" ? this.inicio = true : this.inicio = false;
          console.log(this.titulo);
          //this.seccion =seccion;
          //this.subseccion = subseccion;
          document.title = `AdminPro - ${this.titulo}`;
            console.log(this.inicio)
        })
      }

      ngOnDestroy(): void {
        this.tituloSubs$.unsubscribe();
      }


    getArgumentosRuta(){
        return this.activatedRoute.data;
    }
}
