import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUserNewsComponent } from './top-user-news.component';

describe('TopUserNewsComponent', () => {
  let component: TopUserNewsComponent;
  let fixture: ComponentFixture<TopUserNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopUserNewsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopUserNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
