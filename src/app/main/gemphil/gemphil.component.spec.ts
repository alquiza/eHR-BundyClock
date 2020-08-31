import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GemphilComponent } from './gemphil.component';

describe('GemphilComponent', () => {
  let component: GemphilComponent;
  let fixture: ComponentFixture<GemphilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GemphilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GemphilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
