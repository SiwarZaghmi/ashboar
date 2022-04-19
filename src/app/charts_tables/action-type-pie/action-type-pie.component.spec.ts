import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionTypePieComponent } from './action-type-pie.component';

describe('ActionTypePieComponent', () => {
  let component: ActionTypePieComponent;
  let fixture: ComponentFixture<ActionTypePieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionTypePieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionTypePieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
