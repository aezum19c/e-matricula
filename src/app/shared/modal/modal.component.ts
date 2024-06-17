import { Component, Input, signal, ElementRef, inject } from "@angular/core";
import { Modal } from "src/app/shared/modal/modal.model";
import { ModalConstants } from "src/app/shared/modal/modal";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent {
	
  @Input() modal: Modal = ModalConstants.confirmarEstado;
  @Input() cerrarModal!: (e: MouseEvent) => void | null;
  @Input() aceptarModal!: (e: MouseEvent) => void | null;
  public animateModal = signal(true);
  public elementRef = inject(ElementRef);

  removerAnimacion = (aceptar: boolean, evento: any) => {
    this.animateModal.set(false);
    setTimeout(() => {
      if (aceptar) {
        this.aceptarModal(evento);
      } else {
        this.cerrarModal(evento);
      }
    }, 100);
  };
}
