import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { PrincipalComponent } from "./principal/principal.component";
import { LoginGuard } from "./guards/login.guard";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent, canActivate: [ LoginGuard ], loadChildren: () => import ("./principal/principal.module").then((m) => m.PrincipalModule), title: 'e-matricula | Principal' },
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
