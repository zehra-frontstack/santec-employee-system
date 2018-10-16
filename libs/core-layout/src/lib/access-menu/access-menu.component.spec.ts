import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessMenuComponent } from './access-menu.component';

describe('AccessMenuComponent', () => {
  let component: AccessMenuComponent;
  let fixture: ComponentFixture<AccessMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
