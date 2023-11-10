import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOverviewScreenComponent } from './user-overview-screen.component';

describe('UserOverviewScreenComponent', () => {
  let component: UserOverviewScreenComponent;
  let fixture: ComponentFixture<UserOverviewScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserOverviewScreenComponent]
    });
    fixture = TestBed.createComponent(UserOverviewScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
