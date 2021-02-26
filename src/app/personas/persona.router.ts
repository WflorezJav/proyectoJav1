import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { InicialPersonaComponent } from "../rutascomponents/inicial-persona/inicial-persona.component";
import { InicialComponent } from "../rutascomponents/inicial/inicial.component";
import { Inicial2Component } from "../rutascomponents/inicial2/inicial2.component";
import { NoExisteComponent } from "../rutascomponents/no-existe/no-existe.component";
import { SegundoPersonaComponent } from "../rutascomponents/segundo-persona/segundo-persona.component";
import { TerceroPersonaComponent } from "../rutascomponents/tercero-persona/tercero-persona.component";
import { AuthGuardGuard } from "../services/guards/auth-guard.guard";

const routes = [
    {path: 'persona', component: InicialPersonaComponent,
    canActivate : [AuthGuardGuard],
    children:
    [
        {path: 'segundo', component: SegundoPersonaComponent},
        {path: 'tercero', component: TerceroPersonaComponent},
    ]}
];

@NgModule({
    imports: 
    [
        RouterModule.forRoot(routes)
    ],
    exports: 
    [
        RouterModule
    ]
})
export class PersonaRoutingModule
{

}