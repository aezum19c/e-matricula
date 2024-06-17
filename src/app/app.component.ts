import { Component, inject, signal } from "@angular/core";
import { Router } from "@angular/router";
import { NgSelectConfig } from "@ng-select/ng-select";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public ngSelectConfig = inject(NgSelectConfig);
  public router = inject(Router);
  public loading = signal(false);
  showHelp = false;

  ngOnInit(): void {
  }
}
