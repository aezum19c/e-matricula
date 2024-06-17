// toast.service.ts
import { Injectable } from "@angular/core";
import { Alert } from "./alert.model";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  alert: Alert = {};

  show(alert: Alert) {
    this.alert = alert;
  }

  delete() {
    this.alert = {};
  }
}
