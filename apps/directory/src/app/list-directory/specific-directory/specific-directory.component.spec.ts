import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificDirectoryComponent } from './specific-directory.component';

describe('SpecificDirectoryComponent', () => {
  let component: SpecificDirectoryComponent;
  let fixture: ComponentFixture<SpecificDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificDirectoryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
