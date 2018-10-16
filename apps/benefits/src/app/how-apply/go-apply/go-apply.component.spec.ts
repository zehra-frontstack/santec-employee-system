import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoApplyComponent } from './go-apply.component';

describe('GoApplyComponent', () => {
  let component: GoApplyComponent;
  let fixture: ComponentFixture<GoApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoApplyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
