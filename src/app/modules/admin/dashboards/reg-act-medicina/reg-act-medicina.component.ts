import { Component, OnInit, NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, Validators, FormBuilder } from '@angular/forms';
import { MedicinaService } from 'app/services/medicina.service';
import { Medicina } from 'app/models/Medicina';
import { ActivatedRoute, Router, RouterModule  } from '@angular/router';
import Swal from 'sweetalert2';


import { GenerarCodigoBarrasDecorator } from 'app/models/GenerarCodigoBarrasDecorator';
import { MedicinaComponent } from 'app/models/MedicinaComponent';

@Component({
  selector: 'app-reg-act-medicina',
  templateUrl: './reg-act-medicina.component.html',
  styleUrls: ['./reg-act-medicina.component.scss']
})
export class RegActMedicinaComponent implements OnInit {
  medicinaSeleccionada: Medicina | null = null;
  nuevasExistencias: number = 0;
  titulo = 'Registrar Medicina';
  id: string | null;

  medicinaForm = this.fb.group({
    nombreMedicina: ['', Validators.required],
    categoria: ['Analgesicos', Validators.required],
    cantidad: [0, Validators.required],
    viaAdministracion: ['oral', Validators.required]
  });

  constructor( private fb: FormBuilder, private router: Router, private medicinaService: MedicinaService,
               private aRouter: ActivatedRoute ) { }
  get nombreMedicina() { return this.medicinaForm.get('nombreMedicina'); }
  get categoria() { return this.medicinaForm.get('categoria'); }
  get cantidad() { return this.medicinaForm.get('cantidad'); }
  get viaAdministracion() { return this.medicinaForm.get('viaAdministracion'); }

  ngOnInit(): void {
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  rMCorrect(): void {
    Swal.fire({
      position: 'center', icon: 'success', title: 'Se ha Registrado Correctamente', showConfirmButton: false, timer: 3000
    })
  }

  rMIncorrect(): void {
    Swal.fire({
      position: 'center', icon: 'error', title: 'Faltan Datos por Llenar', showConfirmButton: false, timer: 3000
    })
  }

  limpiarFormulario(){
    this.medicinaForm.reset();
  }

  registrarMedicina() {
    if (this.medicinaForm.valid) {
      const cantidad = this.cantidad.value;

      if (cantidad === 0) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'La cantidad no puede ser 0',
        });
      } else {
        const fechaActual = new Date();

        // Crear una instancia de Medicina
        const medicina: MedicinaComponent = new GenerarCodigoBarrasDecorator(new Medicina(
          this.nombreMedicina.value,
          this.categoria.value,
          this.viaAdministracion.value,
          this.cantidad.value
        ));

        // Aplicar el decorador GenerarCodigoBarrasDecorator
        const medicinaDecorada: MedicinaComponent = new GenerarCodigoBarrasDecorator(medicina);

        // Obtener el código de barras de la instancia decorada
        const codigoBarrasGenerado = medicinaDecorada.generarCodigoBarras();

        // Agregar el código de barras a los datos del medicamento
        const datosMedicina: Medicina = {
          nombreMedicina: this.nombreMedicina.value,
          categoria: this.categoria.value,
          cantidad: this.cantidad.value,
          viaAdministracion: this.viaAdministracion.value,
          fechaEntrega: fechaActual,
          medicamentoDisponible: true,
          codigoBarras: codigoBarrasGenerado,
        };

        Swal.fire({
          icon: 'success',
          title: 'El Medicamento Se ha Registrado Correctamente',
          text: `El Código de Barras Generado Es: ${datosMedicina.codigoBarras}`,
          timer: 5000
        });

        console.log(datosMedicina);

        this.medicinaService.guardarMedicina(datosMedicina).subscribe(
          (data) => {
            this.limpiarFormulario();
            //this.rMCorrect();
          },
          (error) => {
            console.error('Error al registrar medicinas: ', error);
          }
        );
      }
    } else {
      this.rMIncorrect();
    }
  }

}
