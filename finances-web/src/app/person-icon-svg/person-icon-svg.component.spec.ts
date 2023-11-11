import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonIconSvgComponent } from './person-icon-svg.component';

describe('PersonIconSvgComponent', () => {
  let component: PersonIconSvgComponent;
  let fixture: ComponentFixture<PersonIconSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonIconSvgComponent]
    });
    fixture = TestBed.createComponent(PersonIconSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
