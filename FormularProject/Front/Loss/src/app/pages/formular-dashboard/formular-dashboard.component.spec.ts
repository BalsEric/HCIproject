import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularDashboardComponent } from './formular-dashboard.component';

describe('FormularDashboardComponent', () => {
  let component: FormularDashboardComponent;
  let fixture: ComponentFixture<FormularDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
