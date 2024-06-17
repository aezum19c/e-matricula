import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ToogleSidebarService } from 'src/app/core/services/toogle-sidebar.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  @Output() toggleHelp = new EventEmitter<boolean>();
  public toggleSidebarService = inject(ToogleSidebarService);
  public help = signal(false);
  @Input() showHelp: boolean = false;
  public router= inject(Router);

  resetear() {
    localStorage.removeItem("companyClosed");
    this.router.navigate(["./matricula"]);
  }

  toogleSidebar() {
    this.toggleSidebarService.toggle();
  }

  toogleHelpOn() {
    this.showHelp = !this.showHelp;
    this.toggleHelp.emit(this.showHelp);
  }
}
