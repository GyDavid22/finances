import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutIconSvgComponent } from './logout-icon-svg.component';

describe('LogoutIconSvgComponent', () => {
  let component: LogoutIconSvgComponent;
  let fixture: ComponentFixture<LogoutIconSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutIconSvgComponent]
    });
    fixture = TestBed.createComponent(LogoutIconSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
