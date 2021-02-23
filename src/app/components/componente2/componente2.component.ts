import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  // templateUrl: './componente2.component.html',
  template: `<h1>Hola desde componente 2 inline</h1>`,
  // styleUrls: ['./componente2.component.css'],
  styles : ['h1{color: red;}']
})
export class Componente2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
