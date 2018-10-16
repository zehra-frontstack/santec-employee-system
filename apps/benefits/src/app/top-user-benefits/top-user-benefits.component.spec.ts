import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUserBenefitsComponent } from './top-user-benefits.component';

describe('TopUserBenefitsComponent', () => {
  let component: TopUserBenefitsComponent;
  let fixture: ComponentFixture<TopUserBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopUserBenefitsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopUserBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
