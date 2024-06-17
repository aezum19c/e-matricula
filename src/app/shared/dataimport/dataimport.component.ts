import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dataimport',
  templateUrl: './dataimport.component.html',
  styleUrls: ['./dataimport.component.scss']
})
export class DataimportComponent {

	public activeModal = inject( NgbActiveModal );
	@Input() typeDataimport: string = '';

}
