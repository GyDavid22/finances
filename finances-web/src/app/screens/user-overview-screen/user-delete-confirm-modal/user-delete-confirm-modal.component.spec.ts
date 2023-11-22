import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeleteConfirmModalComponent } from './user-delete-confirm-modal.component';

describe('UserDeleteConfirmModalComponent', () => {
  let component: UserDeleteConfirmModalComponent;
  let fixture: ComponentFixture<UserDeleteConfirmModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDeleteConfirmModalComponent]
    });
    fixture = TestBed.createComponent(UserDeleteConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
