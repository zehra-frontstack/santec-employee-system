import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitIconComponent } from './benefit-icon.component';

describe('BenefitIconComponent', () => {
  let component: BenefitIconComponent;
  let fixture: ComponentFixture<BenefitIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BenefitIconComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
