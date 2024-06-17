import { Component, inject, signal } from '@angular/core';
import { GenericoModel } from 'src/app/core/models/generico.model';
import { LISTACLUBES, LISTADOMESES, LISTANIVELES, LISTAPROGRAMAS, LISTASUBPROGRAMAS, PAGINACION } from 'src/app/core/utils/generico';
import { ModalConstants } from "src/app/shared/modal/modal";
import { Alert } from "src/app/shared/alert/alert.model";
import { AlertService } from "src/app/shared/alert/alert.service";
import { Modal } from "src/app/shared/modal/modal.model";
import { LISTADOMATRICULAS } from '../../util/matricula'; 
import { MatriculaModel } from '../../model/matricula.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent {
  isCollapsed = false;
  mesSelect = 0;
  clubSelect = 0;
  programaSelect = 0;
  subprogramaSelect = 0;
  nivelSelect = 0;
  page = 1;
  pageSize = 10;

  public listadoMeses = signal<GenericoModel[]>(LISTADOMESES);
  public listadoClubes = signal<GenericoModel[]>(LISTACLUBES);
  public listadoProgramas = signal<GenericoModel[]>(LISTAPROGRAMAS);
  public listadoSubProgramas = signal<GenericoModel[]>(LISTASUBPROGRAMAS);
  public listadoNiveles = signal<GenericoModel[]>(LISTANIVELES);
  public listadoPageSize = signal<GenericoModel[]>(PAGINACION);

  listadoMatriculas!: MatriculaModel[];
  public collectionSize = signal(LISTADOMATRICULAS.length);
  public modal = signal<Modal>({});
  public loading = signal(false);
  public alertService = inject(AlertService);

  ngOnInit(): void {
    this.elegirPrograma();
    this.actualizarMatricula();
  }

  actualizarMatricula() {
    this.listadoMatriculas = LISTADOMATRICULAS.map((matricula, i) => ({
      id: i + 1,
      ...matricula,
    })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }

  elegirPrograma() {
    this.listadoNiveles().forEach((n) => {
      n.state = false;

      if(n.id === 0) {
        n.state = true;
      } else {
        if(n.tipo === this.programaSelect) {
          n.state = true;
        }
      }
      
    });
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
