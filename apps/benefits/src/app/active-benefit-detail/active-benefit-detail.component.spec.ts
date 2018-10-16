import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveBenefitDetailComponent } from './active-benefit-detail.component';

describe('ActiveBenefitDetailComponent', () => {
  let component: ActiveBenefitDetailComponent;
  let fixture: ComponentFixture<ActiveBenefitDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveBenefitDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveBenefitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
