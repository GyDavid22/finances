import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationScreenComponent } from './registration-screen.component';

describe('RegistrationScreenComponent', () => {
  let component: RegistrationScreenComponent;
  let fixture: ComponentFixture<RegistrationScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationScreenComponent]
    });
    fixture = TestBed.createComponent(RegistrationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
