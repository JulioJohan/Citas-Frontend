import { Component, OnInit } from '@angular/core';
import { Paciente } from 'app/models/Paciente';
import { PacienteService } from 'app/services/paciente/paciente.service';
import { UsuarioService } from 'app/services/usuario/usuario.service';
import {FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { Respuesta } from 'app/models/Respuesta';
import { Usuario } from 'app/models/Usuario';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { NuevoPacienteComponent } from './nuevo-paciente/nuevo-paciente.component';
import { FuseAlertType } from '@fuse/components/alert';
import { CitaService } from '../../../../services/cita/cita.service';
import { Cita } from 'app/models/Cita';
import { parseInt } from 'lodash';


@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.scss']
})
export class CitaComponent implements OnInit{

  constructor( 
    private _formBuilder: FormBuilder,
    public dialog:MatDialog,
    private pacienteService:PacienteService,
    private citaService:CitaService,    
    private usuarioService:UsuarioService){}

  public hoy:Date = new Date();  
  public horaMinutos:string = '';

  public listaPacientes:Paciente[];
  public pacienteSeleccionado:Paciente;
  public listaDoctores:Usuario[];
  public tercerFormularioCita:FormGroup;
  public primerFormularioCita:FormGroup;
  public segundoFormularioCita:FormGroup;
  public showAlert: boolean = false;
  public mostrarAlerta: boolean = false;

  public alert: { type: FuseAlertType; message: string } = {
    type   : 'success',
    message: '',
  };
  public alert2: { type: FuseAlertType; message: string } = {
    type   : 'success',
    message: '',
  };
  public busqueda = new FormControl<string>('',[Validators.nullValidator]);

  ngOnInit(): void {
    this.horaMinutos = `${this.hoy.getHours()}:${this.hoy.getMinutes()} `;
    // this.hoy.getMinutes();
    this.obtenerPacientes();
    this.busquedaDoctor('DOCTOR');
    this.primerFormularioCita = this._formBuilder.group({
      paciente:[null,[Validators.required]],

    })
    this.segundoFormularioCita = this._formBuilder.group({
      edad:[null,[Validators.required]],
      peso:[null,[Validators.required]],
      altura:[null,[Validators.required]],
      temperatura:[null,[Validators.required]],
      presionArterial:[null,[Validators.required]],
      frecuenciaCardiaca:[null,[Validators.required]],
      fecha:[null,[Validators.required]],
      horaIncio:[null,[Validators.required]],
      horaFin:[null,[Validators.required]],
      nota:['',[Validators.required]]           
    })
    

    this.tercerFormularioCita = this._formBuilder.group({
      doctor:[null,[Validators.required]],
      // paciente:[null,[Validators.required]],
      // edad:[null,[Validators.required]],
      // peso:[null,[Validators.required]],
      // altura:[null,[Validators.required]],
      // temperatura:[null,[Validators.required]],
      // presionArterial:[null,[Validators.required]],
      // frecuenciaCardiaca:[null,[Validators.required]],
      // hora:[null,[Validators.required]],
      // nota:['',[Validators.required,Validators.maxLength(500)]]            
    })    
    this.seleccionPaciente();
  }

  private busquedaDoctor( listaDoctores:string ){
    this.usuarioService.busquedaDoctor( listaDoctores ).subscribe((respuesta) => {
      this.listaDoctores = respuesta.data;
      console.log("busqueda", this.listaDoctores);
    })
  }

  public reiniciarFormulario(){
    this.primerFormularioCita.reset();
    this.segundoFormularioCita.reset();
    this.tercerFormularioCita = null
    this.pacienteSeleccionado = null
  }

  public openNuevoPaciente() {
    const matDialogConfig = new MatDialogConfig()
    matDialogConfig.autoFocus = false;
    matDialogConfig.data = 'a'
    const dialogRef = this.dialog.open(NuevoPacienteComponent,matDialogConfig);

    dialogRef.afterClosed().subscribe((result:Paciente) => {
      this.obtenerPacientes();
      if(result !== undefined){
        this.primerFormularioCita.get('paciente').setValue(result._id) 
      }
    });
  }

  private seleccionPaciente(){
    // Verifica los cambios del paciente si, selecciona uno u otro aqui se puede manejar
    this.primerFormularioCita.controls['paciente'].valueChanges.subscribe((respuesta)=>{
      console.log(respuesta)
      // El usuario selecciona el paciente, recibe el valor del id
      // ya que en el formulario enviamos [value]='paciente._id'
      if(respuesta !== null){
        this.buscarPorId(respuesta);
      }
    })
  }

  private buscarPorId(id:string){
    this.pacienteService.buscarPorId(id).subscribe((respuesta)=>{
      this.pacienteSeleccionado = respuesta.data
      console.log(this.pacienteSeleccionado)
    })
  }

  private obtenerPacientes(){
    this.pacienteService.obtenerPacientes().subscribe((respuesta)=>{
     this.listaPacientes = respuesta.data;
     console.log(this.listaPacientes)    
    })
  }
  guardar(){
    const cita = new Cita();
    cita.paciente = this.primerFormularioCita.get('paciente').value;
    cita.doctor = this.tercerFormularioCita.get('doctor').value;
    cita.age = parseInt(this.segundoFormularioCita.get('edad').value);
    cita.weight = parseFloat(this.segundoFormularioCita.get('peso').value);
    cita.height =  parseFloat(this.segundoFormularioCita.get('altura').value);    
    cita.temperature =  parseFloat(this.segundoFormularioCita.get('temperatura').value);    
    cita.pressureArterial = parseFloat(this.segundoFormularioCita.get('presionArterial').value);
    cita.heartrate = parseFloat(this.segundoFormularioCita.get('frecuenciaCardiaca').value);
    
    const horaInicio:string = this.segundoFormularioCita.get('horaIncio').value;
    cita.startHour =  parseInt(horaInicio.split(':')[0]);
    const horaFin:string = this.segundoFormularioCita.get('horaIncio').value;
    cita.endHour=  parseInt(horaFin.split(':')[0]);
    
    const fecha:Date = new Date(this.segundoFormularioCita.get('fecha').value);
    console.log(fecha);
    cita.year = fecha.getFullYear(); 
    cita.month = fecha.getMonth();
    cita.day = fecha.getDate();
    cita.note =  this.segundoFormularioCita.get('nota').value;  
    console.log(cita)
    this.citaService.agendarCita(cita).subscribe((respuesta)=>{
      this.alert2 = {
        type   : 'success',
        message: respuesta.msg,
    };
      // Mostrar
      console.log(this.listaPacientes.length)
      this.mostrarAlerta = true;
    },(error)=>{
      console.log(error)
      this.alert2 = {
        type   : 'error',
        message: error.error.msg,
    };
      // Mostrar
      console.log(this.listaPacientes.length)
      this.mostrarAlerta = true;
    }
    );
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
      this.showAlert = true;
    }
    if(this.listaPacientes.length >= 1){
      this.showAlert = false;
    }
    })
  }

 
 
    // myControl = new FormControl<busquedaCurp>(PacienteService);
    // options: listaPacientes = [];
    // filteredOptions: Observable<busquedaCurp[]>;

  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});

}
