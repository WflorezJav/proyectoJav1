import { Component, OnInit } from '@angular/core';
import { Perro, Raza } from 'src/app/modelos/perro.model';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit{

  public perro: Perro  = new Perro('lazi', Raza.GOLDEN);
  public mostrartitulo: boolean = false;
  public frutas = ["pera", "manzana", "banano", "mango"];
  public animales: Perro[] = [];

  constructor() {
    this.perro = new Perro('pepe', Raza.PASTOR);
   }


  ngOnInit(): void {
      this.perro = new Perro('pepe', Raza.PASTOR);
      this.animales = 
      [
        new Perro('pepe', Raza.PASTOR),
        new Perro('lazi', Raza.SALCHICHA),
        new Perro('rayo', Raza.GOLDEN),
        new Perro('toto', Raza.PASTOR)
      ];
  }


}
