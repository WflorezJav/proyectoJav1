import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Servicio1Service {

  constructor() { }

  public RealizarSuma(numero1: number, numero2:number): number {
    return numero1 + numero2;
  }
}
