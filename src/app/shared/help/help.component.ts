import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: "app-help",
  templateUrl: "./help.component.html",
  styleUrls: ["./help.component.scss"],
})
export class HelpComponent {
	
	@Input() showHelp: boolean = false;
	@Output() closeHelp = new EventEmitter<void>();

}
