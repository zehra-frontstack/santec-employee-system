import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconizedMenuItemComponent } from './iconized-menu-item.component';

describe('IconizedMenuItemComponent', () => {
  let component: IconizedMenuItemComponent;
  let fixture: ComponentFixture<IconizedMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconizedMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconizedMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
