import { async, TestBed } from '@angular/core/testing';
import { CoreLayoutModule } from './core-layout.module';

describe('CoreLayoutModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreLayoutModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CoreLayoutModule).toBeDefined();
  });
});
