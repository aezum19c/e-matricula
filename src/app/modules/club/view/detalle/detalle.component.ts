import { Component, inject, signal } from '@angular/core';
import { GenericoModel } from 'src/app/core/models/generico.model';
import { LISTABANCO, LISTATIPOMONEDA, PAGINACION } from 'src/app/core/utils/generico';
import { ModalConstants } from "src/app/shared/modal/modal";
import { Alert } from "src/app/shared/alert/alert.model";
import { AlertService } from "src/app/shared/alert/alert.service";
import { Modal } from "src/app/shared/modal/modal.model";
import { LISTADOCLUBS } from '../../util/club';
import { ClubModel } from '../../model/club.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent {
  isCollapsed = false;
  bancoSelect = 0;
  monedaSelect = 0;
  page = 1;
  pageSize = 10;

  public listadoBancos = signal<GenericoModel[]>(LISTABANCO);
  public listadoMonedas = signal<GenericoModel[]>(LISTATIPOMONEDA);
  public listadoPageSize = signal<GenericoModel[]>(PAGINACION);

  listadoClub!: ClubModel[];
  public collectionSize = signal(LISTADOCLUBS.length);
  public modal = signal<Modal>({});
  public loading = signal(false);
  public alertService = inject(AlertService);

  ngOnInit(): void {
    this.actualizarClub();
  }

  actualizarClub() {
    this.listadoClub = LISTADOCLUBS.map((club, i) => ({
      id: i + 1,
      ...club,
    })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }

  abrirModal() {
    this.modal.set(ModalConstants.confirmarEstado);
    this.modal().open = true;
  }

  aceptarModal = () => {
    this.modal().open = false;
    this.modal.set({});
    this.mostrarToast();
    console.log("aceptaré el modal...");
  };

  cerrarModal = () => {
    this.modal().open = false;
    this.modal.set({});
    console.log("cerraré el modal...");
  };

  mostrarToast() {
    const alert: Alert = {
      message: "Cambios guardados con éxito.",
      type: "success",
    };
    this.alertService.show(alert);
  }

}
