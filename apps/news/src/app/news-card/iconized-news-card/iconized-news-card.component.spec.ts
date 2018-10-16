import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconizedNewsCardComponent } from './iconized-news-card.component';

describe('IconizedNewsCardComponent', () => {
  let component: IconizedNewsCardComponent;
  let fixture: ComponentFixture<IconizedNewsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconizedNewsCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconizedNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
