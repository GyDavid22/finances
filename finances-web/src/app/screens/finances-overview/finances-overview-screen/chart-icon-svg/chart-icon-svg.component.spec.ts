import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartIconSvgComponent } from './chart-icon-svg.component';

describe('ChartIconSvgComponent', () => {
  let component: ChartIconSvgComponent;
  let fixture: ComponentFixture<ChartIconSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartIconSvgComponent]
    });
    fixture = TestBed.createComponent(ChartIconSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
