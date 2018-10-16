import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentNotificationsComponent } from './current-notifications.component';

describe('CurrentNotificationsComponent', () => {
  let component: CurrentNotificationsComponent;
  let fixture: ComponentFixture<CurrentNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
