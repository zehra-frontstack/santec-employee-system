import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDirectoryComponent } from './home-directory.component';

describe('HomeDirectoryComponent', () => {
  let component: HomeDirectoryComponent;
  let fixture: ComponentFixture<HomeDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDirectoryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
