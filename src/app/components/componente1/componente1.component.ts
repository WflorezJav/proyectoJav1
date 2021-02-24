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
  public nombrepersona = "Carlos";
  public activo = false;
  public razas = [];
  public ff = Raza;

  constructor() {
    this.perro = new Perro('pepe', Raza.PASTOR);
   }


  ngOnInit(): void {
      this.nombrepersona = "Juan";
      this.razas = Object.values(Raza).filter(value => typeof value === 'string');
      

      this.perro = new Perro('pepe', Raza.PASTOR);
      this.animales = 
      [
        new Perro('pepe', Raza.PASTOR),
        new Perro('lazi', Raza.SALCHICHA),
        new Perro('rayo', Raza.GOLDEN),
        new Perro('toto', Raza.PASTOR)
      ];
  }

  public hacerClic()
  {
    alert('hola desde nuestro componente 1: ' + this.nombrepersona);    
  }

  public  mostrarInfoObjeto() {
    alert(this.perro.nombre  + '  - '  + this.perro.raza );
  }

}
