import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancesOverviewScreenComponent } from './finances-overview-screen.component';

describe('FinancesOverviewScreenComponent', () => {
  let component: FinancesOverviewScreenComponent;
  let fixture: ComponentFixture<FinancesOverviewScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancesOverviewScreenComponent]
    });
    fixture = TestBed.createComponent(FinancesOverviewScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
