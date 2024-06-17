import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
{
    path: "matricula",
    loadChildren: () =>
      import("../modules/matricula/matricula.module").then(
        (m) => m.MatriculaModule
      ),
    title: "e-matricula | Registro",
  },
  {
    path: "club",
    loadChildren: () =>
      import("../modules/club/club.module").then(
        (m) => m.ClubModule
      ),
    title: "e-matricula | Clubs",
  },
  {
    path: "deportistas",
    loadChildren: () =>
      import("../modules/deportistas/deportistas.module").then(
        (m) => m.DeportistasModule
      ),
    title: "e-matricula | Deportistas",
  },
  {
    path: "tutores",
    loadChildren: () =>
      import("../modules/tutores/tutores.module").then(
        (m) => m.TutoresModule
      ),
    title: "e-matricula | Tutores",
  },
  {
    path: "",
    redirectTo: "matricula",
    pathMatch: "full",
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalRoutingModule {}