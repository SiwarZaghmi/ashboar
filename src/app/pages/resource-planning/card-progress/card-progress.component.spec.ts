import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProgressComponent } from './card-progress.component';

describe('CardProgressComponent', () => {
  let component: CardProgressComponent;
  let fixture: ComponentFixture<CardProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
