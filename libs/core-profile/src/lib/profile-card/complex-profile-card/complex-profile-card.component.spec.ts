import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexProfileCardComponent } from './complex-profile-card.component';

describe('ComplexProfileCardComponent', () => {
  let component: ComplexProfileCardComponent;
  let fixture: ComponentFixture<ComplexProfileCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexProfileCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
