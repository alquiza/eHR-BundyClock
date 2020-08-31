import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeDefaultComponent } from './income-default.component';

describe('IncomeDefaultComponent', () => {
  let component: IncomeDefaultComponent;
  let fixture: ComponentFixture<IncomeDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
