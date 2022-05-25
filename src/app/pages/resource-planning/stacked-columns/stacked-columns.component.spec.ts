import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedColumnsComponent } from './stacked-columns.component';

describe('StackedColumnsComponent', () => {
  let component: StackedColumnsComponent;
  let fixture: ComponentFixture<StackedColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
