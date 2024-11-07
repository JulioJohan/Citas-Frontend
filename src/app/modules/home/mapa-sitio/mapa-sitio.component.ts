import { Component, OnInit } from '@angular/core';
// import { AutenticacionService } from 'app/services/autenticacion/autenticacion.service';
// import { UsuarioService } from 'app/services/usuario/usuario.service';

@Component({
  selector: 'app-mapa-sitio',
  templateUrl: './mapa-sitio.component.html',
  styleUrls: ['./mapa-sitio.component.scss']
})
export class MapaSitioComponent implements OnInit {

    // constructor(private usuarioService:UsuarioService){}

    tokenActualizado = false;
    menu:any = []
    cita:any = []
    citaAgendada:any =[]
    menuOrdenado:any = []

    ngOnInit(): void{
        this.menu = JSON.parse(localStorage.getItem('menu')!);
        // this.filtrarPorTituloMenu()
        console.log(this.citaAgendada)
        this.ordenarMenuFormaDescendente();
    }

    ordenarMenuFormaDescendente(){
        // this.menuOrdenado = this.menu.sort((a:any,b:any) => b.title + a.title );
        // console.log(this.menuOrdenado)
        if (this.menuOrdenado && Array.isArray(this.menuOrdenado)) {
            this.menuOrdenado.sort((a, b) => b.id - a.id); 
          } else {
            console.warn('miArray está vacío o no es un array');
          }
    }

    // filtrarPorTituloMenu(){
    //     this.cita =  this.menu;
    //     this.citaAgendada = this.menu;
    // }


}
