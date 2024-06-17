import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-leyenda",
  templateUrl: "./leyenda.component.html",
  styleUrls: ["./leyenda.component.scss"],
})
export class LeyendaComponent {

  activeModal = inject(NgbActiveModal);
	
}
