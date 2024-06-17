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
import { MatriculaRoutingModule } from "./matricula-routing.module";
import { MatriculaComponent } from "./matricula.component";
import { NgApexchartsModule } from "ng-apexcharts";
import { FormularioComponent } from './view/formulario/formulario.component';
import { DetalleComponent } from './view/detalle/detalle.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    MatriculaComponent,
    FormularioComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatriculaRoutingModule,
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
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
})
export class MatriculaModule {}
