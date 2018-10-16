import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralDirectoryComponent } from './general-directory.component';

describe('GeneralDirectoryComponent', () => {
  let component: GeneralDirectoryComponent;
  let fixture: ComponentFixture<GeneralDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralDirectoryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
