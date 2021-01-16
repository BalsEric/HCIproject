import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormularComponent } from './edit-formular.component';

describe('EditFormularComponent', () => {
  let component: EditFormularComponent;
  let fixture: ComponentFixture<EditFormularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFormularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
