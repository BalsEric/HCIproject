import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSceneComponent } from './delete-scene.component';

describe('DeleteSceneComponent', () => {
  let component: DeleteSceneComponent;
  let fixture: ComponentFixture<DeleteSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
