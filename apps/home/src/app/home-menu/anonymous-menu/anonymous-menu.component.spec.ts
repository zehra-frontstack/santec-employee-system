import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonymousMenuComponent } from './anonymous-menu.component';

describe('AnonymousMenuComponent', () => {
  let component: AnonymousMenuComponent;
  let fixture: ComponentFixture<AnonymousMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnonymousMenuComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonymousMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
