import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSceneComponent } from './view-scene.component';

describe('ViewSceneComponent', () => {
  let component: ViewSceneComponent;
  let fixture: ComponentFixture<ViewSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
