import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBenefitsComponent } from './top-benefits.component';

describe('TopBenefitsComponent', () => {
  let component: TopBenefitsComponent;
  let fixture: ComponentFixture<TopBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopBenefitsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
