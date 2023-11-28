import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XIconSvgComponent } from './x-icon-svg.component';

describe('XIconSvgComponent', () => {
  let component: XIconSvgComponent;
  let fixture: ComponentFixture<XIconSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XIconSvgComponent]
    });
    fixture = TestBed.createComponent(XIconSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
