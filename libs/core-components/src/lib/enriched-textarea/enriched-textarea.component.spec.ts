import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrichedTextareaComponent } from './enriched-textarea.component';

describe('EnrichedTextareaComponent', () => {
  let component: EnrichedTextareaComponent;
  let fixture: ComponentFixture<EnrichedTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrichedTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrichedTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
