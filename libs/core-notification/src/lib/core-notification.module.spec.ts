import { async, TestBed } from '@angular/core/testing';
import { CoreNotificationModule } from './core-notification.module';

describe('CoreNotificationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreNotificationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CoreNotificationModule).toBeDefined();
  });
});
