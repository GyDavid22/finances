import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceItemListComponent } from './finance-item-list.component';

describe('FinanceItemListComponent', () => {
  let component: FinanceItemListComponent;
  let fixture: ComponentFixture<FinanceItemListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceItemListComponent]
    });
    fixture = TestBed.createComponent(FinanceItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
