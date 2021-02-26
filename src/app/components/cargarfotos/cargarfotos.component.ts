import { Component, OnInit } from '@angular/core';
import { Servicio1Service } from 'src/app/services/servicio1.service';

@Component({
  selector: 'app-cargarfotos',
  templateUrl: './cargarfotos.component.html',
  styleUrls: ['./cargarfotos.component.css']
})
export class CargarfotosComponent implements OnInit {

  constructor(private _servicio1Service : Servicio1Service) { }

  ngOnInit(): void {
  }

  public cargarFotos()
  {
    this._servicio1Service.CargarFotosDesdeApi()
    .subscribe
    (
      result => 
      {
        console.log('resultado desde api', result);
      }
    );
  }

}
