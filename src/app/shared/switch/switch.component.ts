import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Modal } from "../modal/modal.model";
import { ModalConstants } from "src/app/shared/modal/modal";

@Component({
  selector: "app-switch",
  templateUrl: "./switch.component.html",
  styleUrls: ["./switch.component.scss"],
})
export class SwitchComponent {
  @Output() abrirModal = new EventEmitter();
  @Input() estado = false;
  @Input() index = 0;

  cambioEstado() {
    this.abrirModal.emit();
  }
}
