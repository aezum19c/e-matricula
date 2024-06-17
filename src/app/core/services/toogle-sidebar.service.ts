import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class ToogleSidebarService {

  private toggleSource = new BehaviorSubject<boolean>(false);
  currentToggle = this.toggleSource.asObservable();

  toggle() {
    this.toggleSource.next(!this.toggleSource.value);
  }
	
}
