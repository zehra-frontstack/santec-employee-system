import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplifiedNewsCardComponent } from './simplified-news-card.component';

describe('SimplifiedNewsCardComponent', () => {
  let component: SimplifiedNewsCardComponent;
  let fixture: ComponentFixture<SimplifiedNewsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimplifiedNewsCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplifiedNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
