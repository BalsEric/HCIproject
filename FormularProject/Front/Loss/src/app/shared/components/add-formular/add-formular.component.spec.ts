import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormularComponent } from './add-formular.component';

describe('AddFormularComponent', () => {
  let component: AddFormularComponent;
  let fixture: ComponentFixture<AddFormularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFormularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
