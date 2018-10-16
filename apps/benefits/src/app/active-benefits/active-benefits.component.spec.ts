import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveBenefitsComponent } from './active-benefits.component';

describe('ActiveBenefitsComponent', () => {
  let component: ActiveBenefitsComponent;
  let fixture: ComponentFixture<ActiveBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveBenefitsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
