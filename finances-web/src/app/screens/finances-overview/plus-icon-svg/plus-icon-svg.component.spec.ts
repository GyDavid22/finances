import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusIconSvgComponent } from './plus-icon-svg.component';

describe('PlusIconSvgComponent', () => {
  let component: PlusIconSvgComponent;
  let fixture: ComponentFixture<PlusIconSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlusIconSvgComponent]
    });
    fixture = TestBed.createComponent(PlusIconSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
