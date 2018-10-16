import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUserDirectoryComponent } from './top-user-directory.component';

describe('TopUserDirectoryComponent', () => {
  let component: TopUserDirectoryComponent;
  let fixture: ComponentFixture<TopUserDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopUserDirectoryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopUserDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
