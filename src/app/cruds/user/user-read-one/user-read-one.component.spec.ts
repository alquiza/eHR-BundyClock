import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReadOneComponent } from './user-read-one.component';

describe('UserReadOneComponent', () => {
  let component: UserReadOneComponent;
  let fixture: ComponentFixture<UserReadOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReadOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReadOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
