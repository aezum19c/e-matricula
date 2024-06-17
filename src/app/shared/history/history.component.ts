import { Component, signal } from "@angular/core";
import { LISTAHISTORIAL } from "src/app/shared/history/history";
import { HistoryModel } from "./history.model";
import { GenericoModel } from "src/app/core/models/generico.model";
import { ESTADOS, PAGINACION } from "src/app/core/utils/generico";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"],
})
export class HistoryComponent {

  page = 1;
  pageSize = 10;
  estateSelect = 1;
  listadoHistorial!: HistoryModel[];
  public collectionSize = signal(LISTAHISTORIAL.length);
  public listadoPageSize = signal<GenericoModel[]>(PAGINACION);
  public listadoEstates = signal<GenericoModel[]>(ESTADOS);
  public loading = signal(false);

  ngOnInit() {
    this.actualizarProveedores();
  }

  actualizarProveedores() {
    this.listadoHistorial = LISTAHISTORIAL.map((proveedor, i) => ({
      id: i + 1,
      ...proveedor,
    })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
}
