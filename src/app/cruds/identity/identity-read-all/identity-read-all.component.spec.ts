import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityReadAllComponent } from './identity-read-all.component';

describe('IdentityReadAllComponent', () => {
  let component: IdentityReadAllComponent;
  let fixture: ComponentFixture<IdentityReadAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityReadAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityReadAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
