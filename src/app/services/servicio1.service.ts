import { Injectable } from '@angular/core';
import { Perro } from '../modelos/perro.model';

import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Servicio1Service {

  public animales:Perro[] = [];
  
  constructor(private http: HttpClient) { }

  public RealizarSuma(numero1: number, numero2:number): number {
    return numero1 + numero2;
  }

  public CargarFotosDesdeApi()
  {
    //GET obtener
    //POST agrwegar
    //PUT actualizar
    //DELETE eliminar

    return this.http.get("https://jsonplaceholder.typicode.com/photos").pipe
    (
      map(resp => resp)
    );
  }


  public GetAnimales()
  {
    return this.animales;
  }

  public AgregarAnimales(perro: Perro )
  {
    this.animales.push(perro);
  }

  public EditarAnimales(perro: Perro )
  {
    this.animales.push(perro);
  }


  public EliminarAnimales(perro: Perro )
  {
    this.animales.push(perro);
  }
}
