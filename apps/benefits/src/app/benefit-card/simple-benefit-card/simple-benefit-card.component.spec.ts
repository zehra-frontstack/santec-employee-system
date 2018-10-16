import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBenefitCardComponent } from './simple-benefit-card.component';

describe('SimpleBenefitCardComponent', () => {
  let component: SimpleBenefitCardComponent;
  let fixture: ComponentFixture<SimpleBenefitCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleBenefitCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleBenefitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
