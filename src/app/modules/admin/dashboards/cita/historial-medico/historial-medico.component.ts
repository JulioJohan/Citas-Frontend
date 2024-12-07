import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from '../../../../../services/paciente/paciente.service';
import { Paciente } from 'app/models/Paciente';
import { FuseAlertType } from '@fuse/components/alert';
import { DiagnosticoService } from '../../../../../services/diagnostico/diagnostico.service';
import { HistorialMedico } from 'app/models/HistorialMedico';

// Libreria
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
// import { saveAs } from 'file-saver';


@Component({
  selector: 'app-historial-medico',
  templateUrl: './historial-medico.component.html',
  styleUrls: ['./historial-medico.component.scss']
})
export class HistorialMedicoComponent implements OnInit{

  constructor(private formBuilder:FormBuilder,
    private diagnosticoService:DiagnosticoService,
    private pacienteService:PacienteService){
      (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }


  public mostrarAlerta: boolean = false;
  public mostrarAlerta2: boolean = false;
  public mostrarBoton: boolean = false;
  public busqueda = new FormControl('');
  public resultado = new FormControl('',[Validators.required]);
  public formularioBusqueda:FormGroup;
  public listaPacientes:Paciente[];
  public historialMedico:HistorialMedico[];
  public definicionDocumento:any;
  public alert: { type: FuseAlertType; message: string } = {
    type   : 'success',
    message: '',
  };

  public alert2: { type: FuseAlertType; message: string } = {
    type   : 'success',
    message: '',
  };
  ngOnInit(): void {
    this.obtenerPacientes();
    this.formularioBusqueda = this.formBuilder.group({
      id: ['',[Validators.required]]
    })

    this.seleccionPaciente();
  }

  private obtenerPacientes(){
    this.pacienteService.obtenerPacientes().subscribe((respuesta)=>{
     this.listaPacientes = respuesta.data;
     console.log(this.listaPacientes)
    })
  }


  public buscar(termino:string){
    if(termino.length === 0){
      console.log(termino)
      return this.obtenerPacientes();
    }
      return this.busquedaCurp(termino);
  }

  private busquedaCurp( busquedaPorCurp:string ){
    this.pacienteService.busquedaCurp( busquedaPorCurp ).subscribe((respuesta) => {
      this.listaPacientes = respuesta.data;
      if(this.listaPacientes.length === 0){
        this.alert = {
          type   : 'error',
          message: 'No existen pacientes con este CURP',
      };
      // Show the alert
      console.log(this.listaPacientes.length)
      this.mostrarAlerta = true;
    }
    if(this.listaPacientes.length >= 1){
      this.mostrarAlerta = false;
    }
    })
  }

  private errorRespuesta(error:string){
    // Set the alert
    this.alert = {
        type   : 'error',
        message: error,
    };

    // Show the alert
    this.mostrarAlerta = true;
    this.mostrarAlerta2 = false;
    this.mostrarBoton = false;
}

private correctaRespuesta(error:string){

  // Set the alert
  this.alert2 = {
      type   : 'success',
      message: error,
  };

  // Show the alert
  this.mostrarAlerta2 = true;
  this.mostrarAlerta = false;
  this.mostrarBoton = true;

}

  public seleccionPaciente(){
    this.formularioBusqueda.get('id').valueChanges.subscribe(id=>{
      console.log(id)
      this.buscarHistorialMedico(id);
    });
  }

  public buscarHistorialMedico(idPaciente:string){
    this.diagnosticoService.obtenerHistorialMedico(idPaciente).subscribe({
      next:(response)=>{
        this.historialMedico = response.data;
        this.correctaRespuesta(response.msg);
      },
      error:(response)=>{
        this.errorRespuesta(response.error.msg);
      }
    })

  }

  private establecerTexto(informacion){
    const estilo = {
      text: `${informacion}`,
      style: 'text',
      margin: [0, 0, 0, 0],
      fontSize:12
    }
    return estilo;
  }

  public descargarPDF(){
    if(this.historialMedico === undefined || this.historialMedico === null){
      return;
    }

    if(this.historialMedico[0].paciente === null){
      return;
    }
    const reseta:any[] = []

    this.historialMedico.forEach((historial)=>{
      const nombreMedico = {
        text:`Especialidad: ${historial.especialidad.name}`,
        style: 'subtitles'
      }
      const pregunta1 = this.establecerTexto(historial.especialidad.question1);

      const respuesta1 = this.establecerTexto(historial.respuesta1);
      const pregunta2 = this.establecerTexto(historial.especialidad.question2);
      const respuesta2 = this.establecerTexto(historial.respuesta1);
      const pregunta3 = this.establecerTexto(historial.especialidad.question3);
      const respuesta3 = this.establecerTexto(historial.respuesta1);
      const pregunta4 = this.establecerTexto(historial.especialidad.question4);
      const respuesta4 = this.establecerTexto(historial.respuesta1);
      const pregunta5 = this.establecerTexto(historial.especialidad.question5);
      const respuesta5 = this.establecerTexto(historial.respuesta1);

      reseta.push(nombreMedico,pregunta1,respuesta1,pregunta2,respuesta2,pregunta3,respuesta3,pregunta4,respuesta4,pregunta5,respuesta5)
    });
    this.definicionDocumento = {
      content: [
        { text: 'Historial Médico', style: 'header' },
        reseta
      ],
      styles: {
        subtitles:{
          fontSize: 15,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        paragraph: {
          fontSize: 12,
          italics: true,
          color: 'gray'
        }
      }
    }


    console.log(this.historialMedico)
    const pdfDocGenerator = pdfMake.createPdf(this.definicionDocumento);
    const nombreArchivo:string = `${this.historialMedico[0].paciente.curp}_Historial_Medico`;
    pdfDocGenerator.getBlob((blob: Blob) => {
    //   saveAs(blob, `Historial:${nombreArchivo}.pdf`);
    });
  }

}
