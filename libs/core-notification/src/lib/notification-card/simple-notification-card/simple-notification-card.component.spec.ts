import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleNotificationCardComponent } from './simple-notification-card.component';

describe('SimpleNotificationCardComponent', () => {
  let component: SimpleNotificationCardComponent;
  let fixture: ComponentFixture<SimpleNotificationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleNotificationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleNotificationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
