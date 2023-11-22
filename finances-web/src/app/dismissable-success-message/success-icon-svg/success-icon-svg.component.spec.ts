import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessIconSvgComponent } from './success-icon-svg.component';

describe('SuccessIconSvgComponent', () => {
  let component: SuccessIconSvgComponent;
  let fixture: ComponentFixture<SuccessIconSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessIconSvgComponent]
    });
    fixture = TestBed.createComponent(SuccessIconSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
