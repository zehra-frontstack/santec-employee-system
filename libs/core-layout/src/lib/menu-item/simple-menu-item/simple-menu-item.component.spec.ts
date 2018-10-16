import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleMenuItemComponent } from './simple-menu-item.component';

describe('SimpleMenuItemComponent', () => {
  let component: SimpleMenuItemComponent;
  let fixture: ComponentFixture<SimpleMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
