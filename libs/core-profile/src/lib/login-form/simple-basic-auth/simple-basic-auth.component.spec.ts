import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBasicAuthComponent } from './simple-basic-auth.component';

describe('SimpleBasicAuthComponent', () => {
  let component: SimpleBasicAuthComponent;
  let fixture: ComponentFixture<SimpleBasicAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleBasicAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleBasicAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
