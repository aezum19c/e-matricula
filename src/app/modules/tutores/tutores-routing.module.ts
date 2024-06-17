import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutoresComponent } from './tutores.component';
import { FormularioComponent } from './view/formulario/formulario.component';
import { DetalleComponent } from './view/detalle/detalle.component';

const routes: Routes = [
  {
    path: "",
    component: TutoresComponent,
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
export class TutoresRoutingModule { }
