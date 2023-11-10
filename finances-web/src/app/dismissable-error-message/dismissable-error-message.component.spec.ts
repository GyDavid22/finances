import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DismissableErrorMessageComponent } from './dismissable-error-message.component';

describe('DismissableErrorMessageComponent', () => {
  let component: DismissableErrorMessageComponent;
  let fixture: ComponentFixture<DismissableErrorMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DismissableErrorMessageComponent]
    });
    fixture = TestBed.createComponent(DismissableErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
