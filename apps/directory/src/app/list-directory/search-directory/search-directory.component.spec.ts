import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDirectoryComponent } from './search-directory.component';

describe('SearchDirectoryComponent', () => {
  let component: SearchDirectoryComponent;
  let fixture: ComponentFixture<SearchDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchDirectoryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
