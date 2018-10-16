import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableBenefitsComponent } from './available-benefits.component';

describe('AvailableBenefitsComponent', () => {
  let component: AvailableBenefitsComponent;
  let fixture: ComponentFixture<AvailableBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableBenefitsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
