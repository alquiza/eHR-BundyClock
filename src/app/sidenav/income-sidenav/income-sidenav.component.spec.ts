import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeSidenavComponent } from './income-sidenav.component';

describe('IncomeSidenavComponent', () => {
  let component: IncomeSidenavComponent;
  let fixture: ComponentFixture<IncomeSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
