import { Component, OnInit, ViewChild } from '@angular/core';
import { Perro, Raza } from 'src/app/modelos/perro.model';
import { Servicio1Service } from 'src/app/services/servicio1.service';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  @ViewChild('miHijo') hijo: HijoComponent;

  
  public valorhijo:string = "Juan";
  public valorhijo2:string = "Carlos";

  public perro:Perro = new Perro('pepe', Raza.GOLDEN);

  constructor(
    public _servicio1Service : Servicio1Service 
  ) { }

  ngOnInit(): void {

  }

  recibirEmitir(valor)
  {
    alert(valor);
  }


  recibirEmitir2(valor)
  {
    alert('Hola ' + valor);
  }

  SaludarViewChild()
  {
    this.hijo.Saludardesdepadre('Juan');
  }
  onClic(event)
  {
    console.log(event);
  }

  public sumar()
  {
    var suma = this._servicio1Service.RealizarSuma(5,5);
    alert(suma);
  }
}
