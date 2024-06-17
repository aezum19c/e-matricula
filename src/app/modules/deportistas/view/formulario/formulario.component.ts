import { Component, inject, signal } from '@angular/core';
import { GenericoModel } from 'src/app/core/models/generico.model';
import { LISTATIPODOCUMENTO } from 'src/app/core/utils/generico';
import { LISTADOTUTORES } from 'src/app/modules/tutores/util/tutor';
import { LISTADOCLUBS } from 'src/app/modules/club/util/club';
import { ModalConstants } from "src/app/shared/modal/modal";
import { Alert } from "src/app/shared/alert/alert.model";
import { AlertService } from "src/app/shared/alert/alert.service";
import { Modal } from "src/app/shared/modal/modal.model";
import { TutorModel } from 'src/app/modules/tutores/model/tutor.model';
import { ClubModel } from 'src/app/modules/club/model/club.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  active = 1;
  documentoSelect = 0;

  public modal = signal<Modal>({});
  public alertService = inject(AlertService);
  public nuevoRegistro = signal(true);
  public listadoDocumentos = signal<GenericoModel[]>(LISTATIPODOCUMENTO);
  public listadoTutores = signal<TutorModel[]>(LISTADOTUTORES);
  public listadoClubes = signal<ClubModel[]>(LISTADOCLUBS);

  ngOnInit(): void {
    
  }

  abrirModal() {
    this.modal.set(ModalConstants.confirmarRegistroTutor);
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
