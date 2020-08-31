import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReadAllComponent } from './user-read-all.component';

describe('UserReadAllComponent', () => {
  let component: UserReadAllComponent;
  let fixture: ComponentFixture<UserReadAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReadAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReadAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
