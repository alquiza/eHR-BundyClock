import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityReadOneComponent } from './identity-read-one.component';

describe('IdentityReadOneComponent', () => {
  let component: IdentityReadOneComponent;
  let fixture: ComponentFixture<IdentityReadOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityReadOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityReadOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
