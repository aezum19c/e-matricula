import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportistasComponent } from './deportistas.component';

describe('DeportistasComponent', () => {
  let component: DeportistasComponent;
  let fixture: ComponentFixture<DeportistasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeportistasComponent]
    });
    fixture = TestBed.createComponent(DeportistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
