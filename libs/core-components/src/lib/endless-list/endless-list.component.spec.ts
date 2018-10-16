import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndlessListComponent } from './endless-list.component';

describe('EndlessListComponent', () => {
  let component: EndlessListComponent;
  let fixture: ComponentFixture<EndlessListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndlessListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndlessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
