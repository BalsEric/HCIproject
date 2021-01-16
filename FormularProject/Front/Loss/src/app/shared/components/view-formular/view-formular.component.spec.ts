import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFormularComponent } from './view-formular.component';

describe('ViewFormularComponent', () => {
  let component: ViewFormularComponent;
  let fixture: ComponentFixture<ViewFormularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFormularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
