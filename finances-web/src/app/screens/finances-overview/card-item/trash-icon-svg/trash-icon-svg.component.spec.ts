import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashIconSvgComponent } from './trash-icon-svg.component';

describe('TrashIconSvgComponent', () => {
  let component: TrashIconSvgComponent;
  let fixture: ComponentFixture<TrashIconSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrashIconSvgComponent]
    });
    fixture = TestBed.createComponent(TrashIconSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
