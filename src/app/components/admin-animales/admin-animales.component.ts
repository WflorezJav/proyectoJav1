import { Component, OnInit } from '@angular/core';
import { Perro } from 'src/app/modelos/perro.model';
import { Servicio1Service } from 'src/app/services/servicio1.service';

@Component({
  selector: 'app-admin-animales',
  templateUrl: './admin-animales.component.html',
  styleUrls: ['./admin-animales.component.css']
})
export class AdminAnimalesComponent implements OnInit {
  public arreglo: Perro[] = [];
  constructor(private _servicio1Service: Servicio1Service) { }

  ngOnInit(): void {
  }

  public cargarAnimales()
  {
    this.arreglo = this._servicio1Service.animales;
  }

}
