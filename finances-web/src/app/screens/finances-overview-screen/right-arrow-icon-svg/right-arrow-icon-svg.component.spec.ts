import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightArrowIconSvgComponent } from './right-arrow-icon-svg.component';

describe('RightArrowIconSvgComponent', () => {
  let component: RightArrowIconSvgComponent;
  let fixture: ComponentFixture<RightArrowIconSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightArrowIconSvgComponent]
    });
    fixture = TestBed.createComponent(RightArrowIconSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
