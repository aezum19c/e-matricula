import { Component, inject, signal } from '@angular/core';
import { GenericoModel } from 'src/app/core/models/generico.model';
import { LISTABANCO, LISTATIPOCUENTA, LISTATIPOMONEDA } from 'src/app/core/utils/generico';
import { ModalConstants } from "src/app/shared/modal/modal";
import { Alert } from "src/app/shared/alert/alert.model";
import { AlertService } from "src/app/shared/alert/alert.service";
import { Modal } from "src/app/shared/modal/modal.model";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  active = 1;
  bancoSelect = 0;
  cuentaSelect = 0;
  monedaSelect = 0;
  public modal = signal<Modal>({});
  public alertService = inject(AlertService);
  public nuevoRegistro = signal(true);
  public listadoBancos = signal<GenericoModel[]>(LISTABANCO);
  public listadoCuentas = signal<GenericoModel[]>(LISTATIPOCUENTA);
  public listadoMonedas = signal<GenericoModel[]>(LISTATIPOMONEDA);

  ngOnInit(): void {
    
  }

  abrirModal() {
    this.modal.set(ModalConstants.confirmarRegistroClub);
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
