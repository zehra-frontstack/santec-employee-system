import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCompletenessComponent } from './icon-completeness.component';

describe('IconCompletenessComponent', () => {
  let component: IconCompletenessComponent;
  let fixture: ComponentFixture<IconCompletenessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconCompletenessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCompletenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
