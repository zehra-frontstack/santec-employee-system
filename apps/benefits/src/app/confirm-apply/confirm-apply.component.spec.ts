import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmApplyComponent } from './confirm-apply.component';

describe('ConfirmApplyComponent', () => {
  let component: ConfirmApplyComponent;
  let fixture: ComponentFixture<ConfirmApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmApplyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
