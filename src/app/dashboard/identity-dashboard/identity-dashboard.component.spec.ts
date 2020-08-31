import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityDashboardComponent } from './identity-dashboard.component';

describe('IdentityDashboardComponent', () => {
  let component: IdentityDashboardComponent;
  let fixture: ComponentFixture<IdentityDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
