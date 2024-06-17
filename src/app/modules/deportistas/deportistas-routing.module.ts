import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeportistasComponent } from './deportistas.component';
import { FormularioComponent } from './view/formulario/formulario.component';
import { DetalleComponent } from './view/detalle/detalle.component';

const routes: Routes = [
  {
    path: "",
    component: DeportistasComponent,
    children: [
      {
        path: "",
        component: DetalleComponent,
      },
      {
        path: "nuevo",
        component: FormularioComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeportistasRoutingModule { }
