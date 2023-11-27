import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftArrowIconSvgComponent } from './left-arrow-icon-svg.component';

describe('LeftArrowIconSvgComponent', () => {
  let component: LeftArrowIconSvgComponent;
  let fixture: ComponentFixture<LeftArrowIconSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftArrowIconSvgComponent]
    });
    fixture = TestBed.createComponent(LeftArrowIconSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
