import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDirectoryComponent } from './filter-directory.component';

describe('FilterDirectoryComponent', () => {
  let component: FilterDirectoryComponent;
  let fixture: ComponentFixture<FilterDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterDirectoryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
