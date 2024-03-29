import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceStatsComponent } from './finance-stats.component';

describe('FinanceStatsComponent', () => {
  let component: FinanceStatsComponent;
  let fixture: ComponentFixture<FinanceStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceStatsComponent]
    });
    fixture = TestBed.createComponent(FinanceStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
