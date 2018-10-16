import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowApplyComponent } from './how-apply.component';

describe('HowApplyComponent', () => {
  let component: HowApplyComponent;
  let fixture: ComponentFixture<HowApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HowApplyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
