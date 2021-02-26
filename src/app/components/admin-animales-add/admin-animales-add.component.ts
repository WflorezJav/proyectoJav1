import { Component, OnInit } from '@angular/core';
import { Perro, Raza } from 'src/app/modelos/perro.model';
import { Servicio1Service } from 'src/app/services/servicio1.service';

@Component({
  selector: 'app-admin-animales-add',
  templateUrl: './admin-animales-add.component.html',
  styleUrls: ['./admin-animales-add.component.css']
})
export class AdminAnimalesAddComponent implements OnInit {
  public razas = [];
  public perro: Perro  = new Perro('lazi', Raza.GOLDEN);

  constructor(private _servicio1Service: Servicio1Service) { }

  ngOnInit(): void {
    this.razas = Object.values(Raza).filter(value => typeof value === 'string');
  }

  public guardarAnimal()
  {
      console.log(this.perro);
      var perro = new Perro(this.perro.nombre, this.perro.raza);
      this._servicio1Service.AgregarAnimales(perro);
  }

}
