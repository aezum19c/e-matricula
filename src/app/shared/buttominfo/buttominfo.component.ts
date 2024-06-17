import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-buttominfo',
  templateUrl: './buttominfo.component.html',
  styleUrls: ['./buttominfo.component.scss']
})
export class ButtominfoComponent {

	@Input() mensajePopover : string = 'Mensaje informativo';

}
