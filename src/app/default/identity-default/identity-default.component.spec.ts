import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityDefaultComponent } from './identity-default.component';

describe('IdentityDefaultComponent', () => {
  let component: IdentityDefaultComponent;
  let fixture: ComponentFixture<IdentityDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
