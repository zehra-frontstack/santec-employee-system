import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexBenefitCardComponent } from './complex-benefit-card.component';

describe('ComplexBenefitCardComponent', () => {
  let component: ComplexBenefitCardComponent;
  let fixture: ComponentFixture<ComplexBenefitCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComplexBenefitCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexBenefitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
