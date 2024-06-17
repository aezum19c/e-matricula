import { Component, Input, signal } from "@angular/core";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { GenericoModel } from "src/app/core/models/generico.model";
import { TypeDatasearch } from "src/app/shared/datasearch/datasearch";
import { LISTADOEMPRESAS } from "src/app/core/utils/generico";

@Component({
  selector: "app-datasearch",
  templateUrl: "./datasearch.component.html",
  styleUrls: ["./datasearch.component.scss"],
})
export class DatasearchComponent {
  empresaSelect = 0;
  isCollapsed = false;
  calendarInicio!: NgbDateStruct;
  calendarFin!: NgbDateStruct;
  @Input() typeDatasearch: number = 0;
  public typeData = signal(TypeDatasearch);
  public typeTurno = signal(true);
  public listadoEmpresas = signal<GenericoModel[]>(LISTADOEMPRESAS);

  cambiarOpcion(type: boolean) {
    this.typeTurno.set(type);
  }
}
