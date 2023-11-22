import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DismissableSuccessMessageComponent } from './dismissable-success-message.component';

describe('DismissableSuccessMessageComponent', () => {
  let component: DismissableSuccessMessageComponent;
  let fixture: ComponentFixture<DismissableSuccessMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DismissableSuccessMessageComponent]
    });
    fixture = TestBed.createComponent(DismissableSuccessMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
