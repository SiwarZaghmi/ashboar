import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CARDComponent } from './card.component';

describe('CARDComponent', () => {
  let component: CARDComponent;
  let fixture: ComponentFixture<CARDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CARDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CARDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
