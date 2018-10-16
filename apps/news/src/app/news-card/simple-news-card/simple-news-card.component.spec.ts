import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleNewsCardComponent } from './simple-news-card.component';

describe('SimpleNewsCardComponent', () => {
  let component: SimpleNewsCardComponent;
  let fixture: ComponentFixture<SimpleNewsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleNewsCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
