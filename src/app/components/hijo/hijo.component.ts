import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Perro } from 'src/app/modelos/perro.model';
import { Servicio1Service } from 'src/app/services/servicio1.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input('value') valor: Perro;
  @Output() valorenvio : EventEmitter<string> = new EventEmitter();
  public nombre:string;

  constructor(  public _servicio1Service : Servicio1Service ) { }

  ngOnInit(): void {
  }

  emitir()
  {
    this.valorenvio.emit(this.nombre);
  }

  public Saludardesdepadre(valor) {
      alert('hola desde hijo: ' + valor);
  }

  public sumar()
  {
    var suma = this._servicio1Service.RealizarSuma(4,4);
    alert(suma);
  }
}
