import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFormularComponent } from './delete-formular.component';

describe('DeleteFormularComponent', () => {
  let component: DeleteFormularComponent;
  let fixture: ComponentFixture<DeleteFormularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFormularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
