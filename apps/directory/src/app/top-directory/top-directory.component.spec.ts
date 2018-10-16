import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDirectoryComponent } from './top-directory.component';

describe('TopDirectoryComponent', () => {
  let component: TopDirectoryComponent;
  let fixture: ComponentFixture<TopDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopDirectoryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
