import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  NgbCollapseModule,
  NgbDatepickerModule,
  NgbModalModule,
  NgbNavModule,
  NgbPopoverModule,
  NgbTooltipModule,
  NgbPaginationModule
} from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "src/app/shared/shared.module";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";
import { NgApexchartsModule } from "ng-apexcharts";
import { DeportistasRoutingModule } from "./deportistas-routing.module";
import { DeportistasComponent } from "./deportistas.component";
import { FormularioComponent } from './view/formulario/formulario.component';
import { DetalleComponent } from './view/detalle/detalle.component';

@NgModule({
  declarations: [
    DeportistasComponent,
    FormularioComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DeportistasRoutingModule,
    NgbNavModule,
    SharedModule,
    NgbTooltipModule,
    NgSelectModule,
    NgbPopoverModule,
    NgbCollapseModule,
    NgbModalModule,
    NgbDatepickerModule,
    NgApexchartsModule,
    NgbPaginationModule,
  ],
})
export class DeportistasModule {}
