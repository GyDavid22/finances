import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningIconSvgComponent } from './warning-icon-svg.component';

describe('WarningIconSvgComponent', () => {
  let component: WarningIconSvgComponent;
  let fixture: ComponentFixture<WarningIconSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarningIconSvgComponent]
    });
    fixture = TestBed.createComponent(WarningIconSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
