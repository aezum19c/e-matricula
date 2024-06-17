import { Component, inject, signal } from "@angular/core";
import { NavigationEnd, NavigationStart, Router } from "@angular/router";
import { NgSelectConfig } from "@ng-select/ng-select";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
  public ngSelectConfig = inject(NgSelectConfig);
  public router = inject(Router);
  public loading = signal(false);
  showHelp = false;

  ngOnInit(): void {
    this.configurarNgSelect();
    // Simular
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loading.set(true);
      } else if (event instanceof NavigationEnd) {
        this.loading.set(false);
      }
    });
  }

  configurarNgSelect() {
    this.ngSelectConfig.notFoundText = "Sin coincidencias";
    this.ngSelectConfig.loadingText = "Cargando...";
  }

  toggleHelp(value: boolean) {
    this.showHelp = value;
  }

  closeHelp() {
    this.showHelp = false;
  }

}
