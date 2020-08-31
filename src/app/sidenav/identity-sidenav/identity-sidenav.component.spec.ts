import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentitySidenavComponent } from './identity-sidenav.component';

describe('IdentitySidenavComponent', () => {
  let component: IdentitySidenavComponent;
  let fixture: ComponentFixture<IdentitySidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentitySidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentitySidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
