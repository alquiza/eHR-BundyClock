import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeReadAllComponent } from './income-read-all.component';

describe('IncomeReadAllComponent', () => {
  let component: IncomeReadAllComponent;
  let fixture: ComponentFixture<IncomeReadAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeReadAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeReadAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
