import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleProfileCardComponent } from './simple-profile-card.component';

describe('SimpleProfileCardComponent', () => {
  let component: SimpleProfileCardComponent;
  let fixture: ComponentFixture<SimpleProfileCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleProfileCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
