import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexNewsCardComponent } from './complex-news-card.component';

describe('ComplexNewsCardComponent', () => {
  let component: ComplexNewsCardComponent;
  let fixture: ComponentFixture<ComplexNewsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComplexNewsCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
