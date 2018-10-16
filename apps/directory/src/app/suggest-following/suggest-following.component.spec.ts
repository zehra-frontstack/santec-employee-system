import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestFollowingComponent } from './suggest-following.component';

describe('SuggestFollowingComponent', () => {
  let component: SuggestFollowingComponent;
  let fixture: ComponentFixture<SuggestFollowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestFollowingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
