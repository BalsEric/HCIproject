import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QtypeComponent } from './qtype.component';

describe('QtypeComponent', () => {
  let component: QtypeComponent;
  let fixture: ComponentFixture<QtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
