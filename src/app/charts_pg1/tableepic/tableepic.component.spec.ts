import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableepicComponent } from './tableepic.component';

describe('TableepicComponent', () => {
  let component: TableepicComponent;
  let fixture: ComponentFixture<TableepicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableepicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableepicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
