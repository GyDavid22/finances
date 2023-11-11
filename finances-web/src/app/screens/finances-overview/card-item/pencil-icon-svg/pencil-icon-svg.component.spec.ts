import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PencilIconSvgComponent } from './pencil-icon-svg.component';

describe('PencilIconSvgComponent', () => {
  let component: PencilIconSvgComponent;
  let fixture: ComponentFixture<PencilIconSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PencilIconSvgComponent]
    });
    fixture = TestBed.createComponent(PencilIconSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
