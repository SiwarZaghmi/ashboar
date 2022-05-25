import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicTable1Component } from './epic-table1.component';

describe('EpicTable1Component', () => {
  let component: EpicTable1Component;
  let fixture: ComponentFixture<EpicTable1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpicTable1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicTable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
