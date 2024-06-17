import { Component, inject, signal } from "@angular/core";
import { MENU } from "src/app/shared/sidebar/menu";
import { MenuItemModel, MenuModel } from "src/app/shared/sidebar/sidebar.model";
import { ToogleSidebarService } from "src/app/core/services/toogle-sidebar.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent {
  public companyClosed = signal(true);
  public listMenu = signal<MenuModel[]>(MENU);
  public sidebarClosed = signal<boolean>(true);
  public toggleSidebarService = inject(ToogleSidebarService);

  ngOnInit() {
		
		let empresa = localStorage.getItem("companyClosed");
		console.log(empresa);
		if (!empresa) localStorage.setItem("companyClosed", String(this.companyClosed()));
		if ( empresa === 'false' ) this.companyClosed.set(false);

    this.toggleSidebarService.currentToggle.subscribe((toggle) => {
      this.sidebarClosed.set(toggle);
    });
  }

  openCompany(item: MenuItemModel) {
    if (item.items) {
      this.companyClosed.set(false);
			localStorage.setItem("companyClosed", String(this.companyClosed()));
    } else {
      this.companyClosed.set(true);
			localStorage.setItem("companyClosed", String(this.companyClosed()));
    }
  }

  toggleCompany() {
    this.companyClosed.set(!this.companyClosed());
  }

  toogleSidebar() {
    this.toggleSidebarService.toggle();
  }
}
