import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PersonaRoutingModule } from "./personas/persona.router";
import { InicialComponent } from "./rutascomponents/inicial/inicial.component";
import { Inicial2Component } from "./rutascomponents/inicial2/inicial2.component";
import { NoExisteComponent } from "./rutascomponents/no-existe/no-existe.component";

const routes = [
    {path: '', component: InicialComponent},
    {path: 'componente2', component: Inicial2Component},
    {path: '**', component: NoExisteComponent},
];

@NgModule({
    imports: 
    [
        RouterModule.forRoot(routes),
        PersonaRoutingModule
    ],
    exports: 
    [
        RouterModule
    ]
})
export class AppRoutingModule
{

}