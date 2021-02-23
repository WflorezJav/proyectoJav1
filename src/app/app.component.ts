import { Component } from '@angular/core';
import { Perro } from './modelos/perro.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spajaveriana';

  public persona: Perro;


  // public DeclararAnimal()
  // {
  //   var perro = new Perro('lazi', Raza.GOLDEN);
  //   var objeto: Persona =
  //   {
  //     nombre : "Carlos",
  //     saludar: function()
  //     {
  //       alert('Hola');
  //       return "";
  //     },
  //   }

  //   this.recibirPersona(objeto);
  // }


  // public recibirPersona(persona: Persona)
  // {
  // }

  public procesarGenericos()
  {
    /*var pila =  new Pila<number>();
    pila.push(5);
    pila.push(10);
    pila.push(15);

    var data: string = pila.toString();
    alert(data);
    // pila.push("hola"); // No es correcto

    var result = new Resultado<Persona>(false,'',null);
    var resultanimal = new Resultado<Perro>(false,'',null);*/

  }
}
